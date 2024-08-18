import type { AboutMe, GetAllUsersRequest } from '../users.interface';

import findAllUsersByParams from 'src/generalMethods/findAllUsersByParams';
import modifyUserForResponse from 'src/generalMethods/modifyUserForResponse';

export default async function getAllUsers(
  params: GetAllUsersRequest,
): Promise<AboutMe[]> {
  const users = await findAllUsersByParams({}, params);

  const res = modifyUserForResponse(users);

  return res;
}
