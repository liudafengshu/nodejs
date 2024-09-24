import { IsNotEmpty, ValidateIf } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { RegistratUserDto } from './registrat-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto extends PartialType(RegistratUserDto) {
  @ApiProperty({
    type: String,
    description: '登录名',
    required: false,
  })
  @ValidateIf((o) => !o.phone && !o.email) // 当手机号和email为空时，验证用户名
  @IsNotEmpty({ message: '用户名不能为空' })
  name?: string;

  @ApiProperty({
    type: String,
    description: '手机号',
    required: false,
  })
  @ValidateIf((o) => !o.name && !o.email)
  @IsNotEmpty({ message: '手机号不能为空' })
  phone?: string;

  @ApiProperty({
    type: String,
    description: '邮箱',
    required: false,
  })
  @ValidateIf((o) => !o.name && !o.phone)
  @IsNotEmpty({ message: '邮箱不能为空' })
  email?: string;

  @ApiProperty({
    type: String,
    description: '密码',
    required: true,
  })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}
