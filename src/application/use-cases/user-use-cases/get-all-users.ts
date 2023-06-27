import { Injectable } from "@nestjs/common";
import { User } from "src/application/entities/user";
import { UserRepository } from "@application/repositories/user-repository";


interface GetAllUserResponse {
  users: User[] | null
}

@Injectable()
export class GetAllUsers {
  constructor(private userRepository: UserRepository) {

  }

  async execute(): Promise<GetAllUserResponse> { 
    const users = await this.userRepository.findAll();

    return { users };
  }
}