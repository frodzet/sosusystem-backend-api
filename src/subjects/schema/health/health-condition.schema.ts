import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude, Type } from 'class-transformer';
import { FunctionLevel, FunctionLevelSchema } from './topics/function-level.schema';

export type HealthConditionDocument = HealthCondition & Document;

@Schema()
export class HealthCondition {
  @Prop({ type: FunctionLevelSchema })
  @Type(() => FunctionLevel)
  functionLevel: FunctionLevel;
}

export const HealthConditionSchema = SchemaFactory.createForClass(HealthCondition);
