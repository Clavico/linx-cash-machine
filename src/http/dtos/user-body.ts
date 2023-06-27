import { ApiProperty } from "@nestjs/swagger";

export class UserBody {
  @ApiProperty()
  name: string;

  @ApiProperty()
  birthDate: Date;

  @ApiProperty()
  document: string;
}