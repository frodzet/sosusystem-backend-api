import { Address } from '../../infrastructure/mongodb/schema/subjects/address.schema';
import { HealthCondition } from "../../infrastructure/mongodb/schema/subjects/health/health-condition.schema";

export class Subject {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  email: string;
  phone: string;
  address: Address;
  healthCondition: HealthCondition;
}
