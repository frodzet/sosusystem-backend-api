import { Address } from '../schema/address.schema';
import { HealthCondition } from '../schema/health/health-condition.schema';
import { FunctionLevel } from "../schema/health/topics/function-level.schema";

export class CreateSubjectDto {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  email: string;
  phone: string;
  address: Address;
  healthCondition: HealthCondition;
  functionLevel: FunctionLevel;
}
