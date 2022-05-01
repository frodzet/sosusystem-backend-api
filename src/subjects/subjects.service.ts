import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectsService {
  constructor(@InjectModel('Subject') private subjectModel: Model<Subject>) {}

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
    const newSubject = new this.subjectModel(subject).populate('address');

    return await newSubject;
  }

  async update(id: string, subject: UpdateSubjectDto): Promise<Subject> {
    return this.subjectModel.findByIdAndUpdate(id, subject, { new: true });
  }

  async remove(id: string): Promise<Subject> {
    return this.subjectModel.findByIdAndDelete(id);
  }

  async findAllAddress(): Promise<Array<Subject>> {
    return this.subjectModel.find().select('address');
  }
}
