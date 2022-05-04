import { Address } from "../../infrastructure/mongodb/schema/subjects/address.schema";
import { HealthCondition } from "../../infrastructure/mongodb/schema/subjects/health/health-condition.schema";
import { FunctionLevel } from "../../infrastructure/mongodb/schema/subjects/health/topics/function-level/function-level.schema";
import {
  ConditionDescription
} from "../../infrastructure/mongodb/schema/subjects/health/shared/condition-description.schema";


export class CreateSubjectDto {
  firstName: string;
  lastName: string;
  socialSecurityNumber: string;
  email: string;
  phone: string;
  address: Address;
  healthCondition: HealthCondition;
  functionLevel: FunctionLevel;
  conditonDescription: ConditionDescription;
}
