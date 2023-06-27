import { Account } from "src/application/entities/account"
import { Account as RawAccount } from '@prisma/client'

export class PrismaAccountMapper {
  static toPrisma(account: Account) {
    return {
      type: Number(account.type),
      userId: account.userId,
      balance: account.balance
    }
  }

  static toDomain(raw: RawAccount): Account {
    return new Account(
      raw.type,
      Number(raw.balance),
      raw.userId ?? undefined,
      raw.id
    )
  }
}