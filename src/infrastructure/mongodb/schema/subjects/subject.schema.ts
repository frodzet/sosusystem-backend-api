import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Address, AddressSchema } from './address.schema';
import * as Mongoose from 'mongoose';
import { HealthCondition, HealthConditionSchema } from "./health/health-condition.schema";

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
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

  @Prop( { type: HealthConditionSchema })
  @Type(() => HealthCondition )
  healthCondition: HealthCondition;
}

//
export const SubjectSchema = SchemaFactory.createForClass(Subject);
