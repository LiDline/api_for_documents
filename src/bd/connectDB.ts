import { sequelize } from './db';

import './models/associations';
import './models/models';

export default async function connectDB() {
  try {
    await sequelize.authenticate();

    await sequelize.sync();

    console.log(`Connect to the database successful`);
  } catch (error) {
    console.error`Unable to connect to the database: ${error}`;
  }
}
