import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude } from 'class-transformer';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  @Exclude()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
