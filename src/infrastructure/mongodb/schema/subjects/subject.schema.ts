import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Address, AddressSchema } from './address.schema';
import * as Mongoose from 'mongoose';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Transform(({ value }) => value.toString())
  _id: Mongoose.Types.ObjectId;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  socialSecurityNumber: string;

  @Prop()
  birthDate: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop({ type: AddressSchema })
  @Type(() => Address)
  address: Address;
}

//
export const SubjectSchema = SchemaFactory.createForClass(Subject);
