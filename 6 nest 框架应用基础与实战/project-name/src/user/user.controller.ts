import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { UserService } from './user.service';

import { RegistratUserDto } from './dto/registrat-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { FindOneUserDto } from './dto/find-one-user.dto';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '用户注册' })
  @Post('/registrat')
  registrat(@Body() registratUserDto: RegistratUserDto) {
    return this.userService.registrat(registratUserDto);
  }

  @ApiOperation({ summary: '用户登录' })
  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }

  @ApiOperation({ summary: '返回所有用户' })
  @Post('/findAll')
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: '返回一个用户信息' })
  @Get('/findOne')
  findOne(@Query() findOneUserDto: FindOneUserDto) {
    return this.userService.findOne(findOneUserDto);
  }

  @ApiOperation({ summary: '搜索用户' })
  @Post('/find')
  find(@Body() findUserDto: FindUserDto) {
    return this.userService.find(findUserDto);
  }

  @ApiOperation({ summary: '修改用户信息' })
  @Post('/updata')
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  @ApiOperation({ summary: '用户注销账户' })
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
