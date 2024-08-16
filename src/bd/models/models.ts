import { DataTypes } from 'sequelize';

import baseModel from './basicModel';

export const User = baseModel('users', {
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Фамилия',
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Имя',
  },
  patr_name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Отчество',
  },
  gender_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'id пола',
  },
  type_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'id типа пользователя',
  },
  login: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Логин',
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Пароль',
  },
});

export const Document = baseModel('documents', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'id пользователя',
  },
  type_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'id типа документа',
  },
  data: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Данные документов в формате JSON',
  },
});

export const DocumentType = baseModel('document_types', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Название типа документа',
  },
});

export const UserType = baseModel('user_types', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Наименование типа',
  },
});

export const GenderType = baseModel('gender_types', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Наименование',
  },
});
