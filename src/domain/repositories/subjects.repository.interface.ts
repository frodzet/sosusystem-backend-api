import { CreateSubjectDto } from '../../subjects/dto/create-subject.dto';
import { Subject } from '../../core/entities/subject.entity';
import { UpdateSubjectDto } from '../../subjects/dto/update-subject.dto';
import { Address } from '../../infrastructure/mongodb/schema/subjects/address.schema';

export interface ISubjectRepository {
  create(subject: CreateSubjectDto, address: Address): Promise<Subject>;

  findOne(id: string): Promise<Subject>;

  findAll(): Promise<Array<Subject>>;

  update(id: string, subject: UpdateSubjectDto): Promise<Subject>;

  remove(id: string): Promise<Subject>;

  getAddress(): Promise<Address>;
}
