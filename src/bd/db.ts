import { Sequelize } from 'sequelize';
import { URL_MYSQL } from 'src/CONST';

export const sequelize = new Sequelize(URL_MYSQL, {
  logging: process.env.npm_lifecycle_event === 'dev',
});
