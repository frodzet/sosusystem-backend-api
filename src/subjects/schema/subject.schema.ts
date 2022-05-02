import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from "mongoose";
import { Transform, Type } from "class-transformer";
import { Address, AddressSchema } from './address.schema';
import { HealthCondition, HealthConditionSchema } from './health/health-condition.schema';

export type SubjectDocument = Subject & Document;

@Schema()
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

  @Prop( { type: HealthConditionSchema })
  @Type(() => HealthCondition)
  healthCondition: HealthCondition;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
