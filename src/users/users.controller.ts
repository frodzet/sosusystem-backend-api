import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import MongooseClassSerializerInterceptor from '../infrastructure/mongodb/utils/mongooseClassSerializer.interceptor';
import { User } from './entities/user.entity';

@Controller('users')
@UseInterceptors(MongooseClassSerializerInterceptor(User))
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<Array<User>> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<User> {
    return await this.usersService.findOne(param.id);
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.usersService.create(user);
  }

  @Put(':id')
  async update(@Param() param, @Body() user: UpdateUserDto): Promise<User> {
    return await this.usersService.update(param.id, user);
  }

  @Delete(':id')
  async remove(@Param() param) {
    return await this.usersService.remove(param.id);
  }
}
