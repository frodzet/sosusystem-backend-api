import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectsService } from '../domain/services/subjects.service';
import { SubjectsController } from './subjects.controller';
import { SubjectSchema } from '../infrastructure/mongodb/schema/subjects/subject.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Subject', schema: SubjectSchema }]),
  ],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
