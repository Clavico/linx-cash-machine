import { Injectable } from "@nestjs/common";
import { Transaction } from "src/application/entities/transaction";
import { TransactionRepository } from "src/application/repositories/transaction-repository";


interface GetTransactionByAccountRequest {
  accountId: number
}

interface GetTransactionByAccountResponse {
  transactions: Transaction[] | null
}

@Injectable()
export class GetTransactionByAccount {
  constructor(private transactionRepository: TransactionRepository) {

  }

  async execute(request: GetTransactionByAccountRequest): Promise<GetTransactionByAccountResponse> {
    const { accountId } = request;
    const transactions = await this.transactionRepository.findByAccountId(accountId);
    return { transactions };
  }
}