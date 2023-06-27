import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GetAccountByUser } from "src/application/use-cases/account-use-cases/get-accounts-by-user";
import { CreateUser } from "src/application/use-cases/user-use-cases/create-user";
import { DeleteUser } from "src/application/use-cases/user-use-cases/delete-user";
import { GetAllUsers } from "src/application/use-cases/user-use-cases/get-all-users";
import { GetUser } from "src/application/use-cases/user-use-cases/get-user";
import { UpdateUser } from "src/application/use-cases/user-use-cases/update-user";
import { UserBody } from "../dtos/user-body";
import { AccountViewModel } from "../view-models/account-view-model";
import { UserViewModel } from "../view-models/user-view-model";

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private getUser: GetUser,
    private getAllUsers: GetAllUsers,
    private createUser: CreateUser,
    private updateUser: UpdateUser,
    private deleteUser: DeleteUser,
    private getAccountByUser: GetAccountByUser,
  ) { }

  @Get('')
  async findAll() {
    const { users } = await this.getAllUsers.execute();

    return users?.map(UserViewModel.toHTTP);
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const { user } = await this.getUser.execute({
      id
    });

    return UserViewModel.toHTTP(user) ;
  }

  @Get(':id/accounts')
  async findByUser(@Param('id') id: number) {
    const { accounts } = await this.getAccountByUser.execute({
      userId: id
    });

    return accounts?.map(AccountViewModel.toHTTP);
  }

  @Post()
  async create(@Body() body: UserBody) {
    const { name, birthDate, document } = body;
    const { user } = await this.createUser.execute({
      name,
      birthDate,
      document
    })

    return UserViewModel.toHTTP(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: UserBody) {
    const { name, birthDate, document } = body;
    const { user } = await this.updateUser.execute({
      name,
      birthDate,
      document,
      id
    })

    return UserViewModel.toHTTP(user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.deleteUser.execute({
      id
    });
  }
}