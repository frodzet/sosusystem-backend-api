import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';

export type ConditionDescriptionDocument = ConditionDescription & Document;

@Schema()
export class ConditionDescription {
  @Prop({ required: true })
  conditionDescription: string;

  @Prop()
  reason: string;

  @Prop({ required: true, max: 2, min: 0 })
  relevant: number;
}

export const ConditionDescriptionSchema = SchemaFactory.createForClass(ConditionDescription);
