import { Injectable } from "@nestjs/common";
import { Transaction } from "src/application/entities/transaction";
import { TransactionRepository } from "src/application/repositories/transaction-repository";
import { PrismaTransactionMapper } from "../mappers/prisma-transaction-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaTransactionRepository implements TransactionRepository {
  constructor(private prismaService: PrismaService) { }

  async findById(transactionId: number): Promise<Transaction | null> {
    const rawTransaction = await this.prismaService.transaction.findUnique({
      where: {
        id: Number(transactionId)
      }
    });

    if (!rawTransaction) {
      return null;
    }

    return PrismaTransactionMapper.toDomain(rawTransaction);
  }

  async findByAccountId(accountId: number): Promise<Transaction[] | null> { 
    const rawTransactions = await this.prismaService.transaction.findMany({
      where: {
        accountId : Number(accountId)
      }
    });

    if (!rawTransactions) {
      return null;
    }

    return rawTransactions.map(PrismaTransactionMapper.toDomain);
  }

  async create(transaction: Transaction): Promise<Transaction> {
    const raw = PrismaTransactionMapper.toPrisma(transaction);

    const createTransaction = await this.prismaService.transaction.create({
      data: raw
    });

    return PrismaTransactionMapper.toDomain(createTransaction);
  }
}