import { User } from "src/application/entities/user"
import { User as RawUser } from '@prisma/client'

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      name: user.name,
      document: user.document,
      birthDate: new Date(user.birthDate)
    }
  }

  static toDomain(raw: RawUser): User {
    return new User(
      raw.name, 
      raw.birthDate,
      raw.document,
      raw.id
    )
  }
}