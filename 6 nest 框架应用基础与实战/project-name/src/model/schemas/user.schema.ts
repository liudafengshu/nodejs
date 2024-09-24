import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import md5 from '@/utils/md5';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    require: true, //设置必传参
    select: false, //设置查询时不被读取
    set: (val) => md5(val),
  })
  password: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop({
    set: (value) => value && new Date(),
  })
  createAt: Date;

  @Prop({
    set: (value) => value && new Date(),
  })
  updateAt: Date;

  @Prop({
    default: null,
  })
  imgUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
