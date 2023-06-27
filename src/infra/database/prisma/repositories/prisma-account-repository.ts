import { Injectable } from "@nestjs/common";
import { Account } from "src/application/entities/account";
import { AccountRepository } from "src/application/repositories/account-repository";
import { PrismaAccountMapper } from "../mappers/prisma-account-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaAccountRepository implements AccountRepository {
  constructor(private prismaService: PrismaService) { }

  async findById(accountId: number): Promise<Account | null> {
    const rawAccount = await this.prismaService.account.findUnique({
      where: {
        id: Number(accountId)
      }
    });

    if (!rawAccount) {
      return null;
    }

    return PrismaAccountMapper.toDomain(rawAccount);
  }

  async findByUserId(userId: number): Promise<Account[] | null> { 
    const rawAccounts = await this.prismaService.account.findMany({
      where: {
        userId : Number(userId)
      }
    });

    if (!rawAccounts) {
      return null;
    }

    return rawAccounts.map(PrismaAccountMapper.toDomain);
  }

  async create(account: Account): Promise<Account> {
    const raw = PrismaAccountMapper.toPrisma(account);

    const createAccount = await this.prismaService.account.create({
      data: raw
    });

    return PrismaAccountMapper.toDomain(createAccount);
  }

  async updateBalance(accountId: number, balance: number): Promise<Account> {
    
    const updatedAccount =  await this.prismaService.account.update({
      where: {
        id: Number(accountId)
      },
      data: {
        balance
      }
    });

    return PrismaAccountMapper.toDomain(updatedAccount);
  }
}