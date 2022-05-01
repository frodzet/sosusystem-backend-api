import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Keys } from './infrastructure/mongodb/keys';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(Keys.urlKEY), SubjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
