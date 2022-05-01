import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Keys } from './infrastructure/mongodb/keys';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [MongooseModule.forRoot(Keys.urlKEY), UsersModule, SubjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
