import { PartialType } from '@nestjs/mapped-types';
import { RegistratUserDto } from './registrat-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class FindUserDto extends PartialType(RegistratUserDto) {
  @ApiProperty({
    type: String,
    description: '登录名',
  })
  name?: string;

  @ApiProperty({
    type: String,
    description: '手机号',
  })
  phone?: string;

  @ApiProperty({
    type: String,
    description: '邮箱',
  })
  email?: string;
}
