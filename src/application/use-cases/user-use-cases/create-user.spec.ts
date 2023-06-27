import { makeUser } from "@test/factories/user-factory";
import { InMemoryUserRepository } from "@test/repositories/in-memory-user-repository";
import { CreateUser } from "./create-user";

describe('Create User', () => {
  test('should create a user successfully', async () => {
    const userRepositoryMock = new InMemoryUserRepository();
    const createUserInstance = new CreateUser(userRepositoryMock); 
    const { user } = await createUserInstance.execute(makeUser(123));
    expect(userRepositoryMock.users).toHaveLength(1);
    expect(userRepositoryMock.users[0]).toEqual(user);
  });
});