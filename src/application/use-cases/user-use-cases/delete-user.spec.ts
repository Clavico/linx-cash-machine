import { makeUser } from "@test/factories/user-factory";
import { InMemoryUserRepository } from "@test/repositories/in-memory-user-repository";
import { DeleteUser } from "./delete-user";

describe('Delete User', () => {
  test('should delete a user successfully', async () => {
    const userRepositoryMock = new InMemoryUserRepository();
    const deleteUserInstance = new DeleteUser(userRepositoryMock); 
    await userRepositoryMock.create(makeUser(123));
    await deleteUserInstance.execute({ id: 123 });

    expect(userRepositoryMock.users).toHaveLength(0);
  });
});