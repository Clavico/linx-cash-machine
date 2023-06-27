import { Injectable, NotFoundException } from "@nestjs/common";
import { Account, AccountType } from "src/application/entities/account";
import { AccountRepository } from "src/application/repositories/account-repository";
import { UserRepository } from "src/application/repositories/user-repository";

interface CreateAccountRequest {
  type: AccountType, 
  balance: number,
  userId: number
}

interface CreateAccountResponse {
  account: Account
}

@Injectable()
export class CreateAccount {
  constructor(private accountRepository: AccountRepository, private userRepository: UserRepository) {

  }

  async execute(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    const { type, balance, userId } = request;

    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found!');
    }

    const account = new Account(type, balance, userId);

    const createdAccount = await this.accountRepository.create(account);

    return { account: createdAccount };
  }
}