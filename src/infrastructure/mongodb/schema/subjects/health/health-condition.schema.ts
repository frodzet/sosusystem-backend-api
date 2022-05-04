import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type } from 'class-transformer';
import { Category, CategorySchema } from '../shared/category.schema';

export type HealthConditionDocument = HealthCondition & Document;

@Schema()
export class HealthCondition {
  @Prop({ type: [CategorySchema] })
  @Type(() => Category)
  category: Category[];
}

export const HealthConditionSchema =
  SchemaFactory.createForClass(HealthCondition);
