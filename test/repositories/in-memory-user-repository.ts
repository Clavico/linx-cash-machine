import { User } from "src/application/entities/user";
import { UserRepository } from "src/application/repositories/user-repository";

export class InMemoryUserRepository implements UserRepository {

  public users: User[] = [];

  async findById(userId: number): Promise<User | null> {
    const user = this.users.find(
      (item) => (item.id === userId)
    );
    if (!user) {
      return null;
    }

    return user;
  }

  async findAll(): Promise<User[] | null> {
    return this.users;
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async update(user: User): Promise<User> {
    const userIndex = this.users.findIndex(
      (item) => item.id === user.id
    )

    if (userIndex >= 0) {
      this.users[userIndex] = user;
    }

    return user;
  }

  async delete(userId: number): Promise<void> {
    const userIndex = this.users.findIndex(
      (item) => item.id === userId
    )

    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
  }
}