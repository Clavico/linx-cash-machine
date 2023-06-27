import { makeUser } from "@test/factories/user-factory";
import { InMemoryUserRepository } from "@test/repositories/in-memory-user-repository";
import { GetAllUsers } from "./get-all-users";

describe('Get All Users', () => {
  test('should get all users successfully', async () => {
    const userRepositoryMock = new InMemoryUserRepository();
    const getAllUsersInstance = new GetAllUsers(userRepositoryMock); 

    await userRepositoryMock.create(makeUser(1));
    await userRepositoryMock.create(makeUser(2));

    const { users } = await getAllUsersInstance.execute();

    expect(userRepositoryMock.users).toHaveLength(2);
  });
});