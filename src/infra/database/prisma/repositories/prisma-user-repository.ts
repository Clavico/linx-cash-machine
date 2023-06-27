import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { UserRepository } from "../../../../application/repositories/user-repository";
import { User } from "../../../../application/entities/user";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) { }

  async findById(userId: number): Promise<User | null> {
    const rawUser = await this.prismaService.user.findUnique({
      where: {
        id: Number(userId)
      }
    });

    if (!rawUser) {
      return null;
    }

    return PrismaUserMapper.toDomain(rawUser);
  }

  async findAll(): Promise<User[] | null> {
    const rawUsers = await this.prismaService.user.findMany();

    if (!rawUsers) {
      return null;
    }

    return rawUsers.map(PrismaUserMapper.toDomain);
  }

  async create(user: User): Promise<User> {
    const raw = PrismaUserMapper.toPrisma(user);

    const createUser = await this.prismaService.user.create({
      data: raw
    });

    return PrismaUserMapper.toDomain(createUser);
  }

  async update(user: User): Promise<User> {
    const raw = PrismaUserMapper.toPrisma(user);
    const updatedUser =  await this.prismaService.user.update({
      where: {
        id: Number(user.id)
      },
      data: raw
    });

    return PrismaUserMapper.toDomain(updatedUser);
  }

  async delete(userId: number): Promise<void> {
    await this.prismaService.user.delete({
      where: {
        id: Number(userId)
      }
    });
  }

}