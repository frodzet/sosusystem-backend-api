import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from "mongoose";
import { Transform } from "class-transformer";
import * as Mongoose from "mongoose";

export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @Transform(({ value }) => value.toString())
  _id: Mongoose.Types.ObjectId;

  @Prop({required: true})
  city: string;

  @Prop({required: true})
  street: string;

  @Prop({required: true})
  postCode: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
