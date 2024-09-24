import { PartialType } from '@nestjs/mapped-types';
import { RegistratUserDto } from './registrat-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(RegistratUserDto) {
  @ApiProperty({
    type: String,
    description: '用户头像',
    required: false,
  })
  imgUrl: string;
  @ApiProperty({
    type: String,
    description: '登录名',
    required: false,
    default: 'zhangSan',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: '密码',
    required: false,
    default: 'mimamammamma',
  })
  password: string;

  @ApiProperty({
    type: String,
    description: '手机号',
    required: false, // 设置是否必传，默认为true
    // readOnly: true, //设置不可修改
  })
  phone: string;

  @ApiProperty({
    type: String,
    description: '邮箱地址',
    required: false,
  })
  email?: string;

  @ApiProperty({
    type: String,
    description: '用户id',
    required: true,
  })
  id: string;
}
