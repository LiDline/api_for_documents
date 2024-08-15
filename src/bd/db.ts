import { Sequelize } from 'sequelize';

export const urlMySql = process.env.URL_MYSQL ?? 'sqlite::memory:';

export const sequelize = new Sequelize(urlMySql, {
  logging: process.env.NODE_ENV === 'npm_lifecycle_event' ? true : false,
});

// export const CurrencyAddress = sequelize.define(
//   'CurrencyAddress',
//   {
//     address: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//       unique: true,
//     },
//     currency: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     // balance: {
//     //   type: DataTypes.DECIMAL(18, 8),
//     //   allowNull: false,
//     //   defaultValue: 0.0
//     // },
//     // usdt_equivalent: {
//     //   type: DataTypes.DECIMAL(18, 8),
//     //   allowNull: false,
//     //   defaultValue: 0.0
//     // }
//   },
//   {
//     tableName: 'CurrencyAddresses',
//     timestamps: false,
//   },
// );
