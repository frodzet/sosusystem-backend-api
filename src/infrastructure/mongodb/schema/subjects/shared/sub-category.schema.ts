import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type } from 'class-transformer';
import { Condition, ConditionSchema } from './condition-description.schema';

export type SubCategoryDocument = SubCategory & Document;

@Schema()
export class SubCategory {
  @Prop({ type: [ConditionSchema] })
  @Type(() => Condition)
  condition: Condition[];
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);
