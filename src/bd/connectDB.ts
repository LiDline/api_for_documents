import { URL_MYSQL } from 'src/CONST';
import { sequelize } from './db';

import './models/associations';
import './models/models';

export default async function connectDB() {
  try {
    await sequelize.authenticate();

    await sequelize.sync();

    console.log(`Successful connect to the database: ${URL_MYSQL}`);
  } catch (error) {
    console.error`Unable to connect to the database: ${error}`;
  }
}
