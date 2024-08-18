import { Injectable } from '@nestjs/common';

import type {
  CreateUsersRequest,
  FindUserByNameRequest,
  GetAllUsersRequest,
  UpdateUserRequest,
} from './users.interface';

import createUsers from './service/createUsers';
import { User } from 'src/bd/models/models';
import aboutMe from './service/aboutMe';
import getAllUsers from './service/getAllUsers';
import findUserByName from './service/findUserByName';
import updateUser from './service/updateUser';

@Injectable()
export class UsersService {
  async createUsers(input: CreateUsersRequest, id: number) {
    return await createUsers(input, id);
  }

  async deleteUser(id: number, authorId: number) {
    return await User.update(
      { deleted: 1, modify_datetime: new Date(), modify_user_id: authorId },
      { where: { id } },
    );
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

  async updateUser(change: UpdateUserRequest, authorId: number) {
    return await updateUser(change, authorId);
  }
}
