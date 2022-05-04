import { Address } from '../../infrastructure/mongodb/schema/subjects/address.schema';

export class Subject {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  email: string;
  phone: string;
  address: Address;
}
