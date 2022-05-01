import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude } from 'class-transformer';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  postCode: string;

}

export const AddressSchema = SchemaFactory.createForClass(Address);
