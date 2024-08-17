import { UserInstance } from 'src/bd/interfaces.db';
import { USER_TYPE } from 'src/CONST';
import {
  CreateSimpleDataForUser,
  UserTypeProps,
} from 'src/operations/auth/auth.interface';

export default function extractNameFromUser(
  userFromBd: UserInstance,
): CreateSimpleDataForUser {
  const userType = userFromBd!.user_type!.name! as UserTypeProps;

  return {
    role: USER_TYPE[userType],
    id: userFromBd.id!,
    lastName: userFromBd.last_name ?? '',
    firstName: userFromBd.first_name ?? '',
    patrName: userFromBd.patr_name ?? '',
    gender: userFromBd.gender_type?.name ?? '',
  };
}
