import { verify } from 'jsonwebtoken';

import { TokenPayload } from './interfaces.middleware';
import { JWT_CONSTANTS } from 'src/CONST';

export default function parseJWTPayload(
  token: string,
): TokenPayload | undefined {
  try {
    const secret = JWT_CONSTANTS.secret;

    const decoded = verify(token, secret) as TokenPayload;

    return decoded;
  } catch (err) {
    return;
  }
}
