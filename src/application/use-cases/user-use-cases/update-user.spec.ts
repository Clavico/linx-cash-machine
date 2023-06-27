import { makeUser } from "@test/factories/user-factory";
import { InMemoryUserRepository } from "@test/repositories/in-memory-user-repository";
import { UpdateUser } from "./update-user";

describe('Update User', () => {
  test('should update a user successfully', async () => {
    const userRepositoryMock = new InMemoryUserRepository();
    const updateUserInstance = new UpdateUser(userRepositoryMock); 

    const oldUser = makeUser(1);
    await userRepositoryMock.create(oldUser);
  
    const { user } = await updateUserInstance.execute({
      id: Number(oldUser.id),
      birthDate: oldUser.birthDate,
      name: "teste update",
      document: oldUser.document
    });
    expect(userRepositoryMock.users[0]).toEqual(user);
  });
});