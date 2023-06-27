import { Transaction } from "../entities/transaction";

export abstract class TransactionRepository {
  abstract findById(transactionId: number): Promise<Transaction | null>;
  abstract findByAccountId(accountId: number): Promise<Transaction[] | null>;
  abstract create(transaction: Transaction): Promise<Transaction>;
}