import { Injectable } from '@nestjs/common';

import type { CreateUsersRequest } from './users.interface';

import createUsers from './service/createUsers';

@Injectable()
export class UsersService {
  async createUsers(input: CreateUsersRequest, id: number) {
    return await createUsers(input, id);
  }
}
