import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubjectDto } from '../../subjects/dto/create-subject.dto';
import { Subject } from '../../core/entities/subject.entity';
import { UpdateSubjectDto } from '../../subjects/dto/update-subject.dto';
import { Address } from '../../infrastructure/mongodb/schema/subjects/address.schema';
import { SubjectSchema } from '../../infrastructure/mongodb/schema/subjects/subject.schema';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel('Subject') private subjectModel: Model<Subject>) {}

  async findAll(): Promise<Array<Subject>> {
    return this.subjectModel.find().select('-password');
  }

  async findOne(id: string): Promise<Subject> {
    return this.subjectModel
      .findOne({
        _id: id,
      })
      .select('-password');
  }

  async create(subject: CreateSubjectDto): Promise<Subject> {
    const newSubject = await new this.subjectModel(subject)
      .populate('address')
    return newSubject.save();
  }

  async update(id: string, subject: UpdateSubjectDto): Promise<Subject> {
    return this.subjectModel.findByIdAndUpdate(id, subject, { new: true });
  }

  async remove(id: string): Promise<Subject> {
    return this.subjectModel.findByIdAndDelete(id);
  }

  async getAddress(id: string): Promise<Address> {
    return (await this.subjectModel.findById(id)).address;
  }
}
