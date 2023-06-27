import { ApiProperty } from "@nestjs/swagger";

export class TransactionBody {
  @ApiProperty()
  accountId: number;

  @ApiProperty()
  value: number;
}