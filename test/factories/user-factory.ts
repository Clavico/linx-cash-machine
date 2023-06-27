import { User } from "@application/entities/user";

export function makeUser(id: number) {
  return new User(
    "Anderson", 
    new Date(),
    "11111111111",
    id
  )
}