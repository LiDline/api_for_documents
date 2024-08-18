import { Injectable } from '@nestjs/common';

import type {
  CreateUsersRequest,
  FindUserByNameRequest,
  GetAllUsersRequest,
} from './users.interface';

import createUsers from './service/createUsers';
import { User } from 'src/bd/models/models';
import aboutMe from './service/aboutMe';
import getAllUsers from './service/getAllUsers';
import findUserByName from './service/findUserByName';

@Injectable()
export class UsersService {
  async createUsers(input: CreateUsersRequest, id: number) {
    return await createUsers(input, id);
  }

  async deleteUser(id: number) {
    return await User.update({ deleted: 1 }, { where: { id } });
  }

  async aboutMe(id: number) {
    return await aboutMe(id);
  }

  async getAllUsers(params: GetAllUsersRequest) {
    return await getAllUsers(params);
  }

  async findUserByName(params: FindUserByNameRequest) {
    return await findUserByName(params);
  }
}
