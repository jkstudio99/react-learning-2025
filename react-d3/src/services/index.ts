import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import { API_BASE_URL, STORAGE_KEYS } from '../constants';
import type { 
  ApiResponse, 
  User, 
  CreateUserDto, 
  UpdateUserDto, 
  LoginDto, 
  AuthResponse,
  PaginatedResponse,
  ApiError 
} from '../types';

/**
 * Axios HTTP client with interceptors
 */
class HttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor - add auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor - handle errors
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        const originalRequest = error.config;
        
        // Handle 401 errors - try to refresh token
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          
          try {
            const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
            if (refreshToken) {
              const response = await this.client.post('/auth/refresh', {
                refresh_token: refreshToken,
              });
              
              const { access_token } = response.data;
              localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, access_token);
              
              originalRequest.headers.Authorization = `Bearer ${access_token}`;
              return this.client(originalRequest);
            }
          } catch (refreshError) {
            // Refresh failed, redirect to login
            localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
            localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
            localStorage.removeItem(STORAGE_KEYS.USER);
            window.location.href = '/login';
            return Promise.reject(refreshError);
          }
        }
        
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    const response = await this.client.get<T>(url, { params });
    return response.data;
  }

  async post<T>(url: string, data?: unknown): Promise<T> {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }

  async put<T>(url: string, data?: unknown): Promise<T> {
    const response = await this.client.put<T>(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await this.client.delete<T>(url);
    return response.data;
  }

  async patch<T>(url: string, data?: unknown): Promise<T> {
    const response = await this.client.patch<T>(url, data);
    return response.data;
  }
}

// Create HTTP client instance
export const httpClient = new HttpClient(API_BASE_URL);

/**
 * Authentication service
 */
export const authService = {
  login: async (credentials: LoginDto): Promise<AuthResponse> => {
    const response = await httpClient.post<AuthResponse>('/auth/login', credentials);
    
    // Store tokens and user data
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, response.accessToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, response.refreshToken);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(response.user));
    
    return response;
  },

  register: async (userData: CreateUserDto): Promise<ApiResponse<User>> => {
    return httpClient.post<ApiResponse<User>>('/auth/register', userData);
  },

  logout: async (): Promise<void> => {
    try {
      await httpClient.post('/auth/logout');
    } finally {
      // Clear local storage regardless of API call success
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  },

  getCurrentUser: async (): Promise<ApiResponse<User>> => {
    return httpClient.get<ApiResponse<User>>('/auth/profile');
  },

  refreshToken: async (refreshToken: string): Promise<{ access_token: string }> => {
    return httpClient.post<{ access_token: string }>('/auth/refresh', {
      refresh_token: refreshToken,
    });
  },
};

/**
 * User service
 */
export const userService = {
  getUsers: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    sort?: string;
  }): Promise<ApiResponse<PaginatedResponse<User>>> => {
    return httpClient.get<ApiResponse<PaginatedResponse<User>>>('/users', params);
  },

  getUser: async (id: string): Promise<ApiResponse<User>> => {
    return httpClient.get<ApiResponse<User>>(`/users/${id}`);
  },

  createUser: async (userData: CreateUserDto): Promise<ApiResponse<User>> => {
    return httpClient.post<ApiResponse<User>>('/users', userData);
  },

  updateUser: async (id: string, userData: UpdateUserDto): Promise<ApiResponse<User>> => {
    return httpClient.patch<ApiResponse<User>>(`/users/${id}`, userData);
  },

  deleteUser: async (id: string): Promise<ApiResponse<void>> => {
    return httpClient.delete<ApiResponse<void>>(`/users/${id}`);
  },
};

/**
 * Upload service
 */
export const uploadService = {
  uploadFile: async (file: File): Promise<ApiResponse<{ url: string }>> => {
    const formData = new FormData();
    formData.append('file', file);
    
    return httpClient.post<ApiResponse<{ url: string }>>('/upload', formData);
  },
};

/**
 * Error handler utility
 */
export const handleApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    const response = error.response;
    return {
      message: response?.data?.message || error.message || 'An error occurred',
      statusCode: response?.status || 500,
      error: response?.data?.error,
      timestamp: response?.data?.timestamp,
      path: response?.data?.path,
    };
  }
  
  return {
    message: 'An unexpected error occurred',
    statusCode: 500,
  };
};
