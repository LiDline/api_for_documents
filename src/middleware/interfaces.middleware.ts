import { Role } from 'src/operations/auth/auth.interface';

export interface TokenPayload {
  username: string;
  role: Role;
  iat?: number;
  exp?: number;
}
