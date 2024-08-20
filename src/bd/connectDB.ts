import { URL_MYSQL } from 'src/CONST';
import { sequelize } from './db';

import './models/associations';
import './models/models';

export default async function connectDB() {
  let retries = 5;

  await new Promise((res) => setTimeout(res, 5000));

  while (retries) {
    try {
      await sequelize.authenticate();

      await sequelize.sync();

      console.log(`Successful connect to the database: ${URL_MYSQL}`);

      break;
    } catch (error) {
      console.error`Unable to connect to the database: ${error}`;

      retries -= 1;
      console.log(`Retries left: ${retries}`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
}
