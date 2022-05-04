import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { UpdateUserDto } from '../../users/dto/update-user.dto';
import { User } from '../../core/entities/user.entity';
import { IUserRepository } from '../repositories/users.repository.interface';

@Injectable()
export class UsersService implements IUserRepository {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findAll(): Promise<Array<User>> {
    return this.userModel.find().select('-password');
  }

  async findOne(id: string): Promise<User> {
    return this.userModel
      .findOne({
        _id: id,
      })
      .select('-password');
  }

  async create(user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(user);

    return newUser.save();
  }

  async update(id: string, user: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }
}
