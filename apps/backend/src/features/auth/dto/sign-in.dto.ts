import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({ example: 'admin@mail.com' })
  email: string;
  @ApiProperty({ example: 'Test1234' })
  password: string;
}
