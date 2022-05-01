import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type } from 'class-transformer';
import { Address, AddressSchema } from './address.schema';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ unique: true, required: true })
  socialSecurityNumber: string;

  @Prop({ required: true })
  birthDate: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ unique: true })
  phone: string;

  @Prop({ type: AddressSchema })
  @Type(() => Address)
  address: Address;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
