import { Op } from 'sequelize';

import type { FindUserByNameRequest } from '../users.interface';

import findAllUsersByParams from 'src/generalMethods/findAllUsersByParams';
import modifyUserForResponse from 'src/generalMethods/modifyUserForResponse';
import { sequelize } from 'src/bd/db';

export default async function findUserByName(params: FindUserByNameRequest) {
  const lowerName = params.name.toLowerCase();

  const where = {
    [Op.or]: [
      sequelize.where(sequelize.fn('LOWER', sequelize.col('last_name')), {
        [Op.like]: `%${lowerName}%`,
      }),
      sequelize.where(sequelize.fn('LOWER', sequelize.col('first_name')), {
        [Op.like]: `%${lowerName}%`,
      }),
      sequelize.where(sequelize.fn('LOWER', sequelize.col('patr_name')), {
        [Op.like]: `%${lowerName}%`,
      }),
    ],
  };

  const users = await findAllUsersByParams(where, params);

  const res = modifyUserForResponse(users);

  return res;
}
