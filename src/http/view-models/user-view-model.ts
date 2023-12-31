import { User } from "src/application/entities/user";

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      name: user.name,
      birthDate: user.birthDate,
      document: user.document
    }
  }
}