import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from "mongoose";
import { Transform, Type } from "class-transformer";

export type FunctionLevelDocument = FunctionLevel & Document;

@Schema()
export class FunctionLevel {
  @Prop()
  description: string;

  @Prop()
  isRelevant: boolean;
}

export const FunctionLevelSchema = SchemaFactory.createForClass(FunctionLevel);
