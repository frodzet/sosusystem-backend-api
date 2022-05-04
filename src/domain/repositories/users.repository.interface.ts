import { User } from '../../core/entities/user.entity';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { UpdateUserDto } from '../../users/dto/update-user.dto';

export interface IUserRepository {
  create(user: CreateUserDto): Promise<User>;

  findOne(id: string): Promise<User>;

  findAll(): Promise<Array<User>>;

  update(id: string, user: UpdateUserDto): Promise<User>;

  remove(id: string): Promise<User>;
}
