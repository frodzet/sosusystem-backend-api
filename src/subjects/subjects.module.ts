import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectsService } from '../domain/services/subjects.service';
import { SubjectsController } from './subjects.controller';
import { SubjectSchema } from '../infrastructure/mongodb/schema/subjects/subject.schema';
import { AddressSchema } from "../infrastructure/mongodb/schema/subjects/address.schema";
import { SubjectHealthSchema } from "../infrastructure/mongodb/schema/subjects/health/subject.health";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Subject', schema: SubjectSchema},

      { name: 'subjects/health', schema: SubjectHealthSchema, collection: "subjects/health"},
    ]),
  ],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
