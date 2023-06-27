import { makeUser } from "@test/factories/user-factory";
import { InMemoryUserRepository } from "@test/repositories/in-memory-user-repository";
import { GetUser } from "./get-user";

describe('Get User', () => {
  test('should get a user successfully', async () => {
    const userRepositoryMock = new InMemoryUserRepository();
    const getUserInstance = new GetUser(userRepositoryMock); 
    await userRepositoryMock.create(makeUser(1));
    await userRepositoryMock.create(makeUser(2));

    const { user } = await getUserInstance.execute({id: 1});
    expect(userRepositoryMock.users[0]).toEqual(user);
  });
});