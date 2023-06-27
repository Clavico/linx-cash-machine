import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@application/entities/user";
import { UserRepository } from "@application/repositories/user-repository";

interface UpdateUserRequest {
  id: number,
  name: string, 
  birthDate: Date,
  document: string
}

interface UpdateUserResponse {
  user: User
}

@Injectable()
export class UpdateUser {
  constructor(private userRepository: UserRepository) {

  }

  async execute(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    const { name, birthDate, document, id } = request;

    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    
    const newUser = new User(name, birthDate, document, id);

    const updatedUser = await this.userRepository.update(newUser);

    return { user: updatedUser };
  }
}