import type { UserRepository } from "../../domain/repositories";
import type {
  User,
  CreateUserRequest,
  UpdateUserRequest,
} from "../../domain/entities";
import { ApiClient } from "../api";

export class UserRepositoryImpl implements UserRepository {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async findAll(): Promise<User[]> {
    try {
      const response = await this.apiClient.get<{ data: User[] }>("/users");
      return response.data || [];
    } catch (error) {
      console.error("Error in UserRepository.findAll:", error);
      // Return mock data for development
      return this.getMockUsers();
    }
  }

  async findById(id: string): Promise<User | null> {
    try {
      const response = await this.apiClient.get<{ data: User }>(`/users/${id}`);
      return response.data || null;
    } catch (error) {
      console.error("Error in UserRepository.findById:", error);
      // Return mock data for development
      const mockUsers = this.getMockUsers();
      return mockUsers.find((user) => user.id === id) || null;
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const response = await this.apiClient.get<{ data: User }>(
        `/users/email/${email}`
      );
      return response.data || null;
    } catch (error) {
      console.error("Error in UserRepository.findByEmail:", error);
      // Return mock data for development
      const mockUsers = this.getMockUsers();
      return mockUsers.find((user) => user.email === email) || null;
    }
  }

  async create(userData: CreateUserRequest): Promise<User> {
    try {
      const response = await this.apiClient.post<{ data: User }>(
        "/users",
        userData
      );
      return response.data;
    } catch (error) {
      console.error("Error in UserRepository.create:", error);
      // Return mock data for development
      const mockUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        role: userData.role || "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return mockUser;
    }
  }

  async update(id: string, userData: UpdateUserRequest): Promise<User> {
    try {
      const response = await this.apiClient.put<{ data: User }>(
        `/users/${id}`,
        userData
      );
      return response.data;
    } catch (error) {
      console.error("Error in UserRepository.update:", error);
      // Return mock data for development
      const existingUser = await this.findById(id);
      if (!existingUser) {
        throw new Error("User not found");
      }
      return {
        ...existingUser,
        ...userData,
        updatedAt: new Date(),
      };
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.apiClient.delete(`/users/${id}`);
    } catch (error) {
      console.error("Error in UserRepository.delete:", error);
      // For development, just log the action
      console.log(`Mock: User ${id} deleted`);
    }
  }

  // Mock data for development when NestJS backend is not available
  private getMockUsers(): User[] {
    return [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        role: "admin",
        createdAt: new Date("2023-01-01"),
        updatedAt: new Date("2023-01-01"),
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        role: "user",
        createdAt: new Date("2023-01-02"),
        updatedAt: new Date("2023-01-02"),
      },
      {
        id: "3",
        name: "Bob Johnson",
        email: "bob@example.com",
        role: "user",
        createdAt: new Date("2023-01-03"),
        updatedAt: new Date("2023-01-03"),
      },
      {
        id: "4",
        name: "Alice Wilson",
        email: "alice@example.com",
        role: "user",
        createdAt: new Date("2023-01-04"),
        updatedAt: new Date("2023-01-04"),
      },
      {
        id: "5",
        name: "Charlie Brown",
        email: "charlie@example.com",
        role: "admin",
        createdAt: new Date("2023-01-05"),
        updatedAt: new Date("2023-01-05"),
      },
    ];
  }
}
