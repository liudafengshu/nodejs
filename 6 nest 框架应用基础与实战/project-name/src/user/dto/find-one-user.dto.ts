import { ApiProperty } from '@nestjs/swagger';

export class FindOneUserDto {
  @ApiProperty({
    type: String,
    description: '用户id',
    // required: true,
    default: '666666',
  })
  id: string;
}
