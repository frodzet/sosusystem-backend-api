import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubjectDto } from '../../subjects/dto/create-subject.dto';
import { UpdateSubjectDto } from '../../subjects/dto/update-subject.dto';
import { Subject } from '../../core/entities/subject.entity';
import { ISubjectRepository } from '../repositories/subjects.repository.interface';
import { Address } from '../../infrastructure/mongodb/schema/subjects/address.schema';
import { SubjectHealth } from "../../infrastructure/mongodb/schema/subjects/health/subject.health";

@Injectable()
export class SubjectsService implements ISubjectRepository {
  constructor(@InjectModel('Subject') private subjectModel: Model<Subject>,
              @InjectModel('subjects/health') private healthModel: Model<SubjectHealth>) {}

  async findAll(): Promise<Array<Subject>> {
    return this.subjectModel.find().select('-password');
  }

  async findOne(id: string): Promise<any> {
    return  this.subjectModel
      .findOne({
        _id: id,
      });
  }
  async findHealth(id: string): Promise<any> {
    return this.healthModel.findOne({
      _id: id,
    });
  }

  async create(subject: CreateSubjectDto): Promise<Subject> {
    const newSubject = new this.subjectModel(subject);

    return await newSubject.save();
  }

  async update(id: string, subject: UpdateSubjectDto): Promise<Subject> {
    return this.subjectModel.findByIdAndUpdate(id, subject, { new: true });
  }

  async remove(id: string): Promise<Subject> {
    return this.subjectModel.findByIdAndDelete(id);
  }
}
