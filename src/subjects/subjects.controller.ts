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
import { SubjectsService } from '../domain/services/subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import MongooseClassSerializerInterceptor from '../infrastructure/mongodb/utils/mongooseClassSerializer.interceptor';
import { Subject } from '../core/entities/subject.entity';
import { Address } from '../infrastructure/mongodb/schema/subjects/address.schema';

@Controller('subjects')
@UseInterceptors(MongooseClassSerializerInterceptor(Subject))
export class SubjectsController {
  constructor(private subjectsService: SubjectsService) {}

  @Get()
  async findAll(): Promise<Array<Subject>> {
    return await this.subjectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<any> {
    return await this.subjectsService.findOne(param.id).then((data) => {
      return this.subjectsService.findHealth(data.healthID).then((data2) => {
        console.log(data);
        console.log(data2);
        return {
          _id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          socialSecurityNumber: data.socialSecurityNumber,
          email: data.email,
          phone: data.phone,
          address: {
            city: data.address.city,
            street: data.address.street,
            postCode: data.address.postCode,
          },
          health: data2._doc,
        };
      });
    });
  }

  // @Get(':id/address')
  // async getAddress(): Promise<Array<Subject>> {
  //   return await this.subjectsService.getAddress();
  // }

  @Post()
  async create(@Body() subject: CreateSubjectDto): Promise<Subject> {
    return await this.subjectsService.create(subject);
  }

  @Put(':id')
  async update(
    @Param() param,
    @Body() subject: UpdateSubjectDto,
  ): Promise<Subject> {
    return await this.subjectsService.update(param.id, subject);
  }

  @Delete(':id')
  async remove(@Param() param) {
    return await this.subjectsService.remove(param.id);
  }
}
