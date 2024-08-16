export const URL_MYSQL = process.env.URL_MYSQL ?? 'sqlite::memory:';

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
