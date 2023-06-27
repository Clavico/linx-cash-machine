import { Module } from "@nestjs/common";
import { CreateAccount } from "src/application/use-cases/account-use-cases/create-account";
import { GetAccount } from "src/application/use-cases/account-use-cases/get-account";
import { GetAccountByUser } from "src/application/use-cases/account-use-cases/get-accounts-by-user";
import { Deposit } from "src/application/use-cases/transaction-use-cases/deposit";
import { GetTransactionByAccount } from "src/application/use-cases/transaction-use-cases/get-transactions-by-account";
import { Withdraw } from "src/application/use-cases/transaction-use-cases/withdraw";
import { CreateUser } from "src/application/use-cases/user-use-cases/create-user";
import { DeleteUser } from "src/application/use-cases/user-use-cases/delete-user";
import { GetAllUsers } from "src/application/use-cases/user-use-cases/get-all-users";
import { GetUser } from "src/application/use-cases/user-use-cases/get-user";
import { UpdateUser } from "src/application/use-cases/user-use-cases/update-user";
import { DatabaseModule } from "src/infra/database/database.module";
import { AccountsController } from "./controllers/accounts.controller";
import { TransactionsController } from "./controllers/transactions.controller";
import { UsersController } from "./controllers/users.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [
    UsersController,
    AccountsController,
    TransactionsController
  ],
  providers: [
    GetUser,
    GetAllUsers,
    CreateUser,
    UpdateUser,
    DeleteUser,
    GetAccount,
    CreateAccount,
    GetAccountByUser,
    Deposit,
    Withdraw,
    GetTransactionByAccount
  ]
})

export class HttpModule {}