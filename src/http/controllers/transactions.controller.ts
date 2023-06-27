import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Deposit } from "src/application/use-cases/transaction-use-cases/deposit";
import { Withdraw } from "src/application/use-cases/transaction-use-cases/withdraw";
import { TransactionBody } from "../dtos/transaction-body";
import { TransactionViewModel } from "../view-models/transaction-view-model";

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(
    private depositValue: Deposit,
    private withdrawValue: Withdraw,
  ) { }

  @Post('deposit')
  async deposit(@Body() body: TransactionBody) {
    const { value, accountId } = body;
    const { transaction } = await this.depositValue.execute({
      value,
      accountId
    })

    return TransactionViewModel.toHTTP(transaction);
  }

  @Post('withdraw')
  async withdraw(@Body() body: TransactionBody) {
    const { value, accountId } = body;
    const { transaction } = await this.withdrawValue.execute({
      value,
      accountId
    })

    return TransactionViewModel.toHTTP(transaction);
  }
}