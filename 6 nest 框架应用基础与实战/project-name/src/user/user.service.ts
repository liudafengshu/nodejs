import { Injectable } from '@nestjs/common';
import { RegistratUserDto } from './dto/registrat-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  registrat(registratUserDto: RegistratUserDto) {
    return 'This action adds a new 1111111,user';
  }

  login(loginUserDto: LoginUserDto) {
    return 'login';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne() {
    return `This action returns a  user`;
  }

  update(updateUserDto: UpdateUserDto) {
    return `This action updates a  user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
