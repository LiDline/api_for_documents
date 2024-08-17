import { UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import type { Login, LoginResponse, UserTypeProps } from '../auth.interface';

import { GenderType, User, UserType } from 'src/bd/models/models';
import { TokenPayload } from 'src/middleware/interfaces.middleware';
import { JWT_CONSTANTS, USER_TYPE } from 'src/CONST';

export default async function login(user: Login): Promise<LoginResponse> {
  const userFromBd = await User.findOne({
    where: {
      login: user.username,
      password: Buffer.from(user.password).toString('base64'),
      deleted: 0,
    },
    include: [
      {
        model: UserType,
      },
      {
        model: GenderType,
      },
    ],
  });

  if (userFromBd) {
    const userType = userFromBd!.user_type!.name! as UserTypeProps;

    const payload: TokenPayload = {
      username: user.username,
      role: USER_TYPE[userType],
    };

    const res = jwt.sign(payload, JWT_CONSTANTS.secret, {
      expiresIn: JWT_CONSTANTS.expiresIn,
    });

    return {
      user: {
        gender: userFromBd.gender_type?.name ?? '',
        role: USER_TYPE[userType],
        last_name: userFromBd.last_name ?? '',
        first_name: userFromBd.first_name ?? '',
      },
      access_token: res,
    };
  }

  throw new UnauthorizedException();
}
