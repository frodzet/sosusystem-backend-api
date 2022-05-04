import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type } from 'class-transformer';
import { HealthCondition, HealthConditionSchema } from "../health/health-condition.schema";
import { SubCategory, SubCategorySchema } from "./sub-category.schema";

export type CategoryDocument = Category & Document

@Schema()
export class Category {
  @Prop()
  title: string;

  @Prop( { type: [SubCategorySchema] })
  @Type(() => SubCategory )
  subCategory: SubCategory[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);