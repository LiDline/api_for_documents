import { ModelStatic, WhereOptions } from 'sequelize';

import {
  DocumentInstance,
  TypeInstance,
  UserAttributes,
} from 'src/bd/interfaces.db';
import { Document, GenderType, User, UserType } from 'src/bd/models/models';

export default async function findOneUserByParams(
  where: WhereOptions<UserAttributes>,
  needDocuments = false,
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

  const userFromBd = await User.findOne({
    where,
    include: needDocuments
      ? [
          ...include,
          {
            model: Document,
          },
        ]
      : include,
  });

  return userFromBd;
}
