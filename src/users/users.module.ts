import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from '../domain/services/users.service';
import { UsersController } from './users.controller';
import { UserSchema } from '../infrastructure/mongodb/schema/users/user.schema';
import { User } from '../core/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
