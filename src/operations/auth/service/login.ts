import { UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import type { Login, LoginResponse, UserTypeProps } from '../auth.interface';

import { TokenPayload } from 'src/middleware/interfaces.middleware';
import { JWT_CONSTANTS, USER_TYPE } from 'src/CONST';
import toBase64 from 'src/generalMethods/toBase64';
import findOneUserByParams from 'src/generalMethods/findOneUserByParams';
import extractNameFromUser from 'src/generalMethods/extractNameFromUser';

export default async function login(user: Login): Promise<LoginResponse> {
  const userFromBd = await findOneUserByParams({
    login: user.username,
    password: toBase64(user.password),
    deleted: 0,
  });

  if (userFromBd) {
    const userType = userFromBd!.user_type!.name! as UserTypeProps;

    const payload: TokenPayload = {
      username: user.username,
      role: USER_TYPE[userType],
      id: userFromBd.id!,
    };

    const token = jwt.sign(payload, JWT_CONSTANTS.secret, {
      expiresIn: JWT_CONSTANTS.expiresIn,
    });

    const dataUser = extractNameFromUser(userFromBd);

    return {
      user: dataUser,
      access_token: token,
    };
  }

  throw new UnauthorizedException();
}
