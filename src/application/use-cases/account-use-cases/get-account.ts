import { Injectable, NotFoundException } from "@nestjs/common";
import { Account } from "src/application/entities/account";
import { AccountRepository } from "src/application/repositories/account-repository";

interface GetAccountRequest {
  id: number
}

interface GetAccountResponse {
  account: Account
}

@Injectable()
export class GetAccount {
  constructor(private accountRepository: AccountRepository) {

  }

  async execute(request: GetAccountRequest): Promise<GetAccountResponse> {
    const { id } = request;
    
    const account = await this.accountRepository.findById(id);
    if (!account) {
      throw new NotFoundException('Account not found!');
    }

    return { account };
  }
}