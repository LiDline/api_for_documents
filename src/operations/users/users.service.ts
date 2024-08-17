import { Injectable } from '@nestjs/common';
import { User, UserType } from 'src/bd/models/models';

@Injectable()
export class UsersService {
  async findOne(username: string, password: string) {
    const user = await User.findOne({
      where: { login: username, password },
      include: [
        {
          model: UserType,
        },
      ],
    });

    return user;
  }
}
