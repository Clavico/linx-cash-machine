import { Account } from "../entities/account";

export abstract class AccountRepository {
  abstract findById(accountId: number): Promise<Account | null>;
  abstract findByUserId(userId: number): Promise<Account[] | null>;
  abstract create(account: Account): Promise<Account>;
  abstract updateBalance(accountId: number, balance: number): Promise<Account>;
}