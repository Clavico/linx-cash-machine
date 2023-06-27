import { User } from "../entities/user";

export abstract class UserRepository {
  abstract findById(userId: number): Promise<User | null>;
  abstract findAll(): Promise<User[] | null>;
  abstract create(user: User): Promise<User>;
  abstract update(user: User): Promise<User>;
  abstract delete(userId: number): Promise<void>;
}