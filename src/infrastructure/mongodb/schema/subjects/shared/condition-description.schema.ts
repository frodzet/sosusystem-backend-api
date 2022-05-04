import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';

export type ConditionDocument = Condition & Document;

@Schema()
export class Condition {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  reason: string;

  @Prop({ max: 2, min: 0 })
  relevant: number;
}

export const ConditionSchema = SchemaFactory.createForClass(Condition);
