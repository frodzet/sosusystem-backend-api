import { Address } from '../schema/address.schema';

export class CreateSubjectDto {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  email: string;
  phone: string;
  address: Address;
}
