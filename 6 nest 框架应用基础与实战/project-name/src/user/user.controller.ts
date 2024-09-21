import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegistratUserDto } from './dto/registrat-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 注册
  @Post('/registrat')
  registrat(@Body() registratUserDto: RegistratUserDto) {
    return this.userService.registrat(registratUserDto);
  }

  // 登录
  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }

  // 查找所有
  @Post('/findAll')
  findAll() {
    return this.userService.findAll();
  }

  // 查找一个
  @Post('/findOne')
  findOne() {
    return this.userService.findOne();
  }

  // 修改用户
  @Post('/updata')
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  // 删除用户
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
