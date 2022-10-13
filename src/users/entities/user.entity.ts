import { Role } from "src/enums/role.enum";

export class Users {
  name: string;
  email: string;
  password: string;
  roles: string[];
  isValidated: boolean;
}
