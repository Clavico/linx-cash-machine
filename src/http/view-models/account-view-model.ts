import { Account } from "src/application/entities/account";

export class AccountViewModel {
  static toHTTP(account: Account) {
    return {
      id: account.id,
      balance: account.balance,
      type: account.type,
      userId: account.userId
    }
  }
}