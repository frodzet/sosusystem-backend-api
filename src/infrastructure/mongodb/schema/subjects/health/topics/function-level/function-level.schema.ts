import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { PersonalCare, PersonalCareSchema } from './personal-care.schema';
import { DailyActivities, DailyActivitiesSchema } from "./daily-activities.schema";

export type FunctionLevelDocument = FunctionLevel & Document;

@Schema()
export class FunctionLevel {
  @Prop({ type: PersonalCareSchema })
  @Type(() => PersonalCare)
  personalCare: PersonalCare;

  @Prop( {type: DailyActivitiesSchema })
  @Type(() => DailyActivities)
  dailyActivities: DailyActivities;
}

export const FunctionLevelSchema = SchemaFactory.createForClass(FunctionLevel);
