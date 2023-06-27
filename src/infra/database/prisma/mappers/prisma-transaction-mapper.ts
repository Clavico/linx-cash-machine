import { Transaction } from "src/application/entities/transaction"
import { Transaction as RawTransaction } from '@prisma/client'

export class PrismaTransactionMapper {
  static toPrisma(transaction: Transaction) {
    return {
      type: Number(transaction.type),
      accountId: transaction.accountId,
      value: transaction.value,
      dateTime: transaction.dateTime
    }
  }

  static toDomain(raw: RawTransaction): Transaction {
    return new Transaction(
      raw.type,
      Number(raw.value),
      raw.dateTime,
      raw.accountId,
      raw.id
    )
  }
}