import { Module } from "@nestjs/common";
import { AccountRepository } from "src/application/repositories/account-repository";
import { TransactionRepository } from "src/application/repositories/transaction-repository";
import { UserRepository } from "src/application/repositories/user-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaAccountRepository } from "./prisma/repositories/prisma-account-repository";
import { PrismaTransactionRepository } from "./prisma/repositories/prisma-transaction-repository";
import { PrismaUserRepository } from "./prisma/repositories/prisma-user-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    },
    {
      provide: AccountRepository,
      useClass: PrismaAccountRepository
    },
    {
      provide: TransactionRepository,
      useClass: PrismaTransactionRepository
    }
  ],
  exports: [
    UserRepository, AccountRepository,TransactionRepository
  ]
})

export class DatabaseModule { }