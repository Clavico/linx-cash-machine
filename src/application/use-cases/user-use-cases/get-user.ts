import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/application/entities/user";
import { UserRepository } from "@application/repositories/user-repository";

interface GetUserRequest {
  id: number
}

interface GetUserResponse {
  user: User
}

@Injectable()
export class GetUser {
  constructor(private userRepository: UserRepository) {

  }

  async execute(request: GetUserRequest): Promise<GetUserResponse> {
    const { id } = request;

    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    
    return { user };
  }
}