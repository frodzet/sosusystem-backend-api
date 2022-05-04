import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { ConditionDescription, ConditionDescriptionSchema } from "../../shared/condition-description.schema";

export type PersonalCareDocument = PersonalCare & Document;

@Schema()
export class PersonalCare {
  @Prop({ type: ConditionDescriptionSchema })
  @Type(() => ConditionDescription)
  conditionDescription: ConditionDescription;
}

export const PersonalCareSchema = SchemaFactory.createForClass(PersonalCare);
