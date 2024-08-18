import { ModelStatic, WhereOptions } from 'sequelize';

import type {
  DocumentInstance,
  TypeInstance,
  UserAttributes,
} from 'src/bd/interfaces.db';

import { Document, GenderType, User, UserType } from 'src/bd/models/models';
import { GetAllUsersRequest } from 'src/operations/users/users.interface';

export default async function findAllUsersByParams(
  where: WhereOptions<UserAttributes>,
  params: GetAllUsersRequest,
  needDocuments = true,
) {
  const include: {
    model: ModelStatic<TypeInstance | DocumentInstance>;
  }[] = [
    {
      model: UserType,
    },
    {
      model: GenderType,
    },
  ];

  const users = await User.findAll({
    limit: params.limit,
    offset: params.offset,

    where,

    include: needDocuments
      ? [
          ...include,
          {
            model: Document,
            where: { deleted: 0 },
            required: false,
          },
        ]
      : include,
  });

  return users;
}
