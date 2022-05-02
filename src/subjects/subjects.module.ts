import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { SubjectSchema } from './schema/subject.schema';
import { AddressSchema } from './schema/address.schema';
import { HealthConditionSchema } from './schema/health/health-condition.schema';
import { FunctionLevelSchema } from './schema/health/topics/function-level.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Subject', schema: SubjectSchema },
      { name: 'Address', schema: AddressSchema },
      { name: 'HealthCondition', schema: HealthConditionSchema },
      { name: 'HealthCondition/FunctionLevel', schema: FunctionLevelSchema },
    ]),
  ],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
