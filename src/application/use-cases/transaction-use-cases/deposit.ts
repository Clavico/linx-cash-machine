import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Account } from "src/application/entities/account";
import { Transaction, TransactionType } from "src/application/entities/transaction";
import { AccountRepository } from "src/application/repositories/account-repository";
import { TransactionRepository } from "src/application/repositories/transaction-repository";

interface CreateDepositRequest {
  value: number,
  accountId: number
}

interface CreateDepositResponse {
  transaction: Transaction
}

@Injectable()
export class Deposit {
  constructor(private transactionRepository: TransactionRepository, private accountRepository: AccountRepository) {

  }

  async execute(request: CreateDepositRequest): Promise<CreateDepositResponse> {
    const { value, accountId } = request;

    const account = await this.Validate(value, accountId);
    const createdTransaction = await this.transactionRepository.create(new Transaction(TransactionType.DEPOSIT, value, new Date(), accountId));
    await this.accountRepository.updateBalance(accountId, account.balance + value);

    return { transaction: createdTransaction };
  }

  private async Validate(value: number, accountId: number) {
    if (value < 1) {
      throw new BadRequestException('Value cannot be less than 1');
    }

    const account = await this.accountRepository.findById(accountId);
    if (!account) {
      throw new NotFoundException('Account not found!');
    }
    return account;
  }
}