import { DataTypes, ModelAttributes } from 'sequelize';

import { sequelize } from '../db';
import { TableNameProps } from '../interfaces.db';

export default function baseModel(
  tableName: TableNameProps,
  inputAttributes: ModelAttributes,
) {
  const baseAttributes: ModelAttributes = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    create_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Дата и время создания записи',
    },
    create_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Автор создания записи',
    },
    modify_datetime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Дата и время последнего изменения записи',
    },
    modify_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Автор последнего изменения записи',
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Отметка об удалении записи',
    },
  };

  const modelParams = {
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    paranoid: false,
    tableName,
  };

  const model = sequelize.define(
    tableName,
    Object.assign({}, baseAttributes, inputAttributes),

    modelParams,
  );

  return model;
}
