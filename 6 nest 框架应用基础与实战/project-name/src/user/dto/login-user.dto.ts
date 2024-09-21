import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './registrat-user.dto';

export class LoginUserDto extends PartialType(CreateUserDto) {}
