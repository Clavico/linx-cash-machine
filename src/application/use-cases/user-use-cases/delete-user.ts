import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "@application/repositories/user-repository";

interface DeleteUserRequest {
  id: number
}

type DeleteUserResponse = void

@Injectable()
export class DeleteUser {
  constructor(private userRepository: UserRepository) {

  }

  async execute(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    const { id } = request;

    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    
    await this.userRepository.delete(id);
  }
}