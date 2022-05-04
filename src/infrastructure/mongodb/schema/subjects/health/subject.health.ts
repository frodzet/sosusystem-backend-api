import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as Mongoose from "mongoose";

export type SubjectHealthDocument = SubjectHealth & Document;

@Schema()
export class SubjectHealth {

  @Prop()
  clientID: Mongoose.Types.ObjectId;
}


//
export const SubjectHealthSchema = SchemaFactory.createForClass(SubjectHealth);