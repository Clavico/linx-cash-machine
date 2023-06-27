import { Transaction } from "src/application/entities/transaction";

export class TransactionViewModel {
  static toHTTP(transaction: Transaction) {
    return {
      id: transaction.id,
      value: transaction.value,
      type: transaction.type,
      dateTime: transaction.dateTime,
      accountId: transaction.accountId
    }
  }
}