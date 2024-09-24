import { Injectable } from '@nestjs/common';
import { RegistratUserDto } from './dto/registrat-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { FindOneUserDto } from './dto/find-one-user.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/model/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // 注册
  async registrat(registratUserDto: RegistratUserDto) {
    // const createdUser = new this.userModel({
    //   ...registratUserDto,
    //   createAt: new Date(),
    // });
    // const data = await createdUser.save();

    // 第二种写法
    const data = this.userModel.create({
      ...registratUserDto,
      createAt: new Date(),
    });
    return data;
  }

  //登录
  login(loginUserDto: LoginUserDto) {
    const data = this.userModel.findOne(loginUserDto);
    if (data) return data;
    else return '登录名或者密码错误';
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(findOneUserDto: FindOneUserDto) {
    return this.userModel.findById(findOneUserDto.id).exec();
  }

  find(findUserDto: FindUserDto) {
    const data = this.userModel.find(findUserDto);
    return data;
  }

  async update(updateUserDto: UpdateUserDto) {
    // const data = await this.userModel.findById(updateUserDto.id);
    const data = await this.userModel.findByIdAndUpdate(updateUserDto.id, {
      ...updateUserDto,
      updateAt: new Date(),
    });

    return data;
  }

  async remove(id: string) {
    const data = await this.userModel.findByIdAndDelete(id);
    return data;
  }
}
