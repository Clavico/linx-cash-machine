import { Injectable } from "@nestjs/common";
import { User } from "@application/entities/user";
import { UserRepository } from "@application/repositories/user-repository";

interface CreateUserRequest {
  name: string, 
  birthDate: Date,
  document: string
}

interface CreateUserResponse {
  user: User
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {

  }

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, birthDate, document } = request;

    const user = new User(name, birthDate, document);

    const createdUser = await this.userRepository.create(user);

    return { user: createdUser };
  }
}