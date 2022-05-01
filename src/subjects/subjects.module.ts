import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { SubjectSchema } from './schema/subject.schema';
import { Subject } from './entities/subject.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Subject', schema: SubjectSchema },
    ]),
  ],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
