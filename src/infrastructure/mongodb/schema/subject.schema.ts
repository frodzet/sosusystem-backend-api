import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude } from 'class-transformer';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ unique: true })
  socialSecurityNumber: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ unique: true })
  phone: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
