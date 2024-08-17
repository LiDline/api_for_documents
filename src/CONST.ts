export const URL_MYSQL = process.env.FULL_URL_MYSQL ?? 'sqlite::memory:';

export const MIN_LENGTH = {
  MIN_LENGTH_PASSWORD: 4,
};

export const TABLE_NAME = [
  'users',
  'documents',
  'document_types',
  'user_types',
  'gender_types',
] as const;

export const JWT_CONSTANTS = {
  secret:
    process.env.SECRET ??
    'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
  expiresIn: process.env.LIVE_TIME_JWT ?? '60m',
};
export const USERS = ['admin', 'user'] as const;

export const USER_TYPE = {
  Администратор: USERS[0],
  Пользователь: USERS[1],
} as const;

export const URL_OBJECT = {
  healthcheck: { first: '/healthcheck' },
  auth: {
    first: '/auth',
    additional: {
      login: '/login',
    },
  },
  users: {
    first: '/users',
    additional: {
      createUsers: '/create_user',
      deleteUser: '/delete_user',
      aboutMe: '/about_me',
    },
  },
} as const;
