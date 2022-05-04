import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { ConditionDescription, ConditionDescriptionSchema } from "../../shared/condition-description.schema";

export type DailyActivitiesDocument = DailyActivities & Document;

@Schema()
export class DailyActivities {
  @Prop({ type: ConditionDescriptionSchema })
  @Type(() => ConditionDescription)
  conditionDescription: ConditionDescription;
}

export const DailyActivitiesSchema = SchemaFactory.createForClass(DailyActivities);
