import type { User, CreateUserRequest, UpdateUserRequest } from "../entities";

export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: CreateUserRequest): Promise<User>;
  update(id: string, user: UpdateUserRequest): Promise<User>;
  delete(id: string): Promise<void>;
}
