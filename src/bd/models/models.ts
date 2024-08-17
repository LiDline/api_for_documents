import { DataTypes, ModelStatic } from 'sequelize';

import baseModel from './basicModel';
import { DocumentInstance, TypeInstance, UserInstance } from '../interfaces.db';

//-------------------User-------------------

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
    unique: true,
    allowNull: true,
    comment: 'Логин',
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Пароль',
  },
}) as ModelStatic<UserInstance>;

//-------------------Document-------------------

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
}) as ModelStatic<DocumentInstance>;

//-------------------Types-------------------

export const DocumentType = baseModel('document_types', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Название типа документа',
  },
}) as ModelStatic<TypeInstance>;

export const UserType = baseModel('user_types', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Наименование типа',
  },
}) as ModelStatic<TypeInstance>;

export const GenderType = baseModel('gender_types', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Наименование',
  },
}) as ModelStatic<TypeInstance>;
