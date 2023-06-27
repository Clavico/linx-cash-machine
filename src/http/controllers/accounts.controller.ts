import { Body, Controller, Get, Param, Post, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateAccount } from "src/application/use-cases/account-use-cases/create-account";
import { GetAccount } from "src/application/use-cases/account-use-cases/get-account";
import { GetTransactionByAccount } from "src/application/use-cases/transaction-use-cases/get-transactions-by-account";
import { AccountBody } from "../dtos/account-body";
import { AccountViewModel } from "../view-models/account-view-model";
import { TransactionViewModel } from "../view-models/transaction-view-model";


@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(
    private getAccount: GetAccount,
    private createAccount: CreateAccount,
    private getTransactionByAccount: GetTransactionByAccount
  ) { }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const { account } = await this.getAccount.execute({
      id
    });

    return AccountViewModel.toHTTP(account);
  }

  @Get(':id/transactions')
  async findTransactionByAccount(@Param('id') id: number) {
    const { transactions } = await this.getTransactionByAccount.execute({
      accountId: id
    });

    return transactions?.map(TransactionViewModel.toHTTP);
  }

  @Post()
  async create(@Body() body: AccountBody) {
    const { balance, type, userId } = body;
    const { account } = await this.createAccount.execute({
      balance,
      type,
      userId,
    })

    return AccountViewModel.toHTTP(account);
  }
}