import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Transaction, TransactionType } from "src/application/entities/transaction";
import { AccountRepository } from "src/application/repositories/account-repository";
import { TransactionRepository } from "src/application/repositories/transaction-repository";

interface CreateWithdrawRequest {
  value: number,
  accountId: number
}

interface CreateWithdrawResponse {
  transaction: Transaction
}

@Injectable()
export class Withdraw {
  constructor(private transactionRepository: TransactionRepository, private accountRepository: AccountRepository) {

  }

  async execute(request: CreateWithdrawRequest): Promise<CreateWithdrawResponse> {
    
    const { value, accountId } = request;
    
    const account = await this.Validate(accountId, value);
    const deliveredNotes: number[] = this.getDeliveredNotes(value);
    const createdTransaction = await this.transactionRepository.create(new Transaction(TransactionType.WITHDRAWAL, value, new Date(), accountId));
    await this.accountRepository.updateBalance(accountId, account.balance - value);

    return { transaction: createdTransaction };
  }

  private getDeliveredNotes(value: number) {
    const availableValues = [100, 50, 20];
    const deliveredNotes: number[] = [];
    var auxValue = value;
    for (const v of availableValues) {
      while (auxValue >= v) {
        deliveredNotes.push(v);
        auxValue -= v;
      }
    }
    
    console.log(`Notas entregues: ${deliveredNotes.join(', ')}`);

    return deliveredNotes;
  }

  private async Validate(accountId: number, value: number) {
    const account = await this.accountRepository.findById(accountId);
    if (!account) {
      throw new NotFoundException('Account not found!');
    }

    if (value > account.balance) {
      throw new BadRequestException('Insufficient balance to withdraw.');
    }

    if (value < 50 && value % 20 !== 0) {
      throw new BadRequestException('Notes not available to withdraw.');
    }

    if (value % 10 !== 0) {
      throw new BadRequestException('Notes not available to withdraw.');
    }

    return account;
  }
}