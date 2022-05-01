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
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import MongooseClassSerializerInterceptor from '../infrastructure/mongodb/utils/mongooseClassSerializer.interceptor';
import { Subject } from './entities/subject.entity';

@Controller('subjects')
@UseInterceptors(MongooseClassSerializerInterceptor(Subject))
export class SubjectsController {
  constructor(private subjectsService: SubjectsService) {}

  @Get()
  async findAll(): Promise<Array<Subject>> {
    return await this.subjectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<Subject> {
    return await this.subjectsService.findOne(param.id);
  }

  @Get(':id/address')
  async findAllAddress(): Promise<Array<Subject>> {
    return await this.subjectsService.findAllAddress();
  }

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
