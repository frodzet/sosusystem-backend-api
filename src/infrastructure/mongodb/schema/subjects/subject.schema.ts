import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Address, AddressSchema } from './address.schema';
import { HealthCondition, HealthConditionSchema } from "./health/health-condition.schema";
import * as Mongoose from "mongoose";

export type SubjectDocument = Subject & Document;

@Schema({ strict: false})
export class Subject {
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

  @Prop({ type: Mongoose.Types.ObjectId, ref: 'subjects/health' })
  healthID: Mongoose.Types.ObjectId;

  randomObj: null;
}


//
export const SubjectSchema = SchemaFactory.createForClass(Subject);
