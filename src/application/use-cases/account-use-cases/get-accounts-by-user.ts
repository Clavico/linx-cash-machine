import { Injectable } from "@nestjs/common";
import { Account } from "src/application/entities/account";
import { AccountRepository } from "src/application/repositories/account-repository";


interface GetAccountByUserRequest {
  userId: number
}

interface GetAccountByUserResponse {
  accounts: Account[] | null
}

@Injectable()
export class GetAccountByUser {
  constructor(private accountRepository: AccountRepository) {

  }

  async execute(request: GetAccountByUserRequest): Promise<GetAccountByUserResponse> {
    const { userId } = request;
    
    const accounts = await this.accountRepository.findByUserId(userId);

    return { accounts };
  }
}