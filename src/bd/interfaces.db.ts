import { Model } from 'sequelize';

import { TABLE_NAME } from 'src/CONST';

export type TableNameProps = (typeof TABLE_NAME)[number];

type StringData = string | null;
type NumberData = number | null;
type DateData = Date | null;

export interface BaseModelAttributes {
  id?: number;
  create_datetime?: DateData;
  create_user_id?: NumberData;
  modify_datetime?: DateData;
  modify_user_id?: NumberData;
  deleted?: NumberData;
}

//-------------------User-------------------

export interface UserAttributes extends BaseModelAttributes {
  last_name: StringData;
  first_name: StringData;
  patr_name: StringData;
  gender_id: NumberData;
  type_id: NumberData;
  login: StringData;
  password: StringData;
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {
  user_type?: TypeInstance;
  gender_type?: TypeInstance;
}

//-------------------Document-------------------

export interface DocumentAttributes extends BaseModelAttributes {
  user_id: NumberData;
  type_id: NumberData;
  data: StringData;
}

export interface DocumentInstance
  extends Model<DocumentAttributes>,
    DocumentAttributes {}

//-------------------Types-------------------

export interface TypeAttributes extends BaseModelAttributes {
  name: StringData;
}

export interface TypeInstance extends Model<TypeAttributes>, TypeAttributes {}
