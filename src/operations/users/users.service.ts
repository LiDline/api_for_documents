import { Injectable } from '@nestjs/common';
import { User } from 'src/bd/models/models';

@Injectable()
export class UsersService {
  async findOne(username: string) {
    const res = await User.findOne({ where: { login: username } });

    return res;
  }
}
