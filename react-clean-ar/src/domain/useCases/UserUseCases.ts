import { User, CreateUserRequest, UpdateUserRequest } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserUseCases {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    try {
      return await this.userRepository.findAll();
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  }

  async getUserById(id: string): Promise<User | null> {
    try {
      if (!id) {
        throw new Error("User ID is required");
      }
      return await this.userRepository.findById(id);
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw new Error("Failed to fetch user");
    }
  }

  async createUser(userData: CreateUserRequest): Promise<User> {
    try {
      // Validate user data
      if (!userData.email || !userData.name || !userData.password) {
        throw new Error("Email, name, and password are required");
      }

      // Check if user already exists
      const existingUser = await this.userRepository.findByEmail(
        userData.email
      );
      if (existingUser) {
        throw new Error("User with this email already exists");
      }

      return await this.userRepository.create(userData);
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async updateUser(id: string, userData: UpdateUserRequest): Promise<User> {
    try {
      if (!id) {
        throw new Error("User ID is required");
      }

      // Check if user exists
      const existingUser = await this.userRepository.findById(id);
      if (!existingUser) {
        throw new Error("User not found");
      }

      return await this.userRepository.update(id, userData);
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      if (!id) {
        throw new Error("User ID is required");
      }

      // Check if user exists
      const existingUser = await this.userRepository.findById(id);
      if (!existingUser) {
        throw new Error("User not found");
      }

      await this.userRepository.delete(id);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      if (!email) {
        throw new Error("Email is required");
      }
      return await this.userRepository.findByEmail(email);
    } catch (error) {
      console.error("Error fetching user by email:", error);
      throw new Error("Failed to fetch user");
    }
  }
}
