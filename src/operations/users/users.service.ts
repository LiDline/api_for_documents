import { Injectable } from '@nestjs/common';

import type { CreateUsersRequest } from './users.interface';

import createUsers from './service/createUsers';
import { User } from 'src/bd/models/models';

@Injectable()
export class UsersService {
  async createUsers(input: CreateUsersRequest, id: number) {
    return await createUsers(input, id);
  }

  async deleteUser(id: number) {
    return await User.update({ deleted: 1 }, { where: { id } });
  }
}
