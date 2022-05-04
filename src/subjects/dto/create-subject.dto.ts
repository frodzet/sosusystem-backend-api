import { ConditionDescription } from '../../infrastructure/mongodb/schema/subjects/health/shared/condition-description.schema';
import { Address } from '../../infrastructure/mongodb/schema/subjects/address.schema';

export class CreateSubjectDto {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  email: string;
  phone: string;
  address: Address;
}
