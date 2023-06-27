import { ApiProperty } from "@nestjs/swagger";
import { AccountType } from "src/application/entities/account";

export class AccountBody {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  balance: number;

  @ApiProperty()
  type: AccountType;
}