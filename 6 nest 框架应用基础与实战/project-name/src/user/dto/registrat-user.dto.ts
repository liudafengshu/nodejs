import { ApiProperty } from '@nestjs/swagger';

export class RegistratUserDto {
  @ApiProperty({
    type: String,
    description: '登录名',
    required: true,
    default: 'zhangSan',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: '密码',
    required: true,
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
}
