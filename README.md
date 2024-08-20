# Общая информация

## Задание:

Развернуть АПИ для приема документов от внешних заказчиков, со следующими возможностями:

- Создание пользователя (User/Admin).
- Авторизация пользователя по данным из БД (поля login/password таблицы Users. Password в БД обязательно должен быть закодирован в base64).
- Принимать и обрабатывать Post запросы с данными в формате JSON. Под обработкой понимается валидация данных, создание/поиск/обновление/удаление пользователя и/или его документов.
- Отображение информации и документов об авторизованном пользователе.
- Отображение информации о всех пользователях их документах для Admin.
- Сделать описания созданного сервиса в readme.md.

## Описание

Проект построен на <a href="https://nestjs.com/" target="_blank">Nest.js</a> framework.

## Запуск

```bash
cp env.example .env # Вставьте Url своей БД в FULL_URL_MYSQL!
```

### dev

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

## prod

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

or

```bash
docker compose up --build # python3.10 и выше
```

## Дерево проекта

```text
─ src
    ├─ bd
    |   └─ Модели Sequelize, подключение
    |
    ├─ generalMethods
    |   └─ Общие методы endpoints
    |
    ├─ middleware
    |   └─ Работа с токеном перед передачей в endpoint
    |
    ├─ operators
    |   └─ [endpoint]
    |        ├─ service
    |        |   └─ Методы обработки данных
    |        ├─ validation
    |        |   └─ Zod-семы для валидации request
    |        ├─ [endpoint].controller.ts
    |        |   └─ Контроллер endpoint, его URL
    |        ├─ [endpoint].const.ts
    |        |   └─ Константы для endpoint
    |        └─ [endpoint].dto.ts
    |            └─ DTO, использующее Zod-схемы для валидации на endpoint
    |
    └─ CONST.ts
        └─ Общие константы
```

# Конечные точки

1. [Эндпоинты](#Эндпоинты)

   - [Healthcheck](#healthcheck)
   - [Auth](#auth)
     - [POST /auth/login](#authlogin)
   - [Users](#users)
     - [POST /users/create_users](#userscreate_users) (Admin)
     - [GET /users/get_all_users](#usersget_all_users) (Admin)
     - [GET /users/find_user_by_name](#usersfind_user_by_name) (Admin)
     - [DELETE /users/delete_user/:id](#usersdelete_userid) (Admin)
     - [GET /users/about_me](#usersabout_me)
     - [POST /users/update_user](#usersupdate_user)
   - [Documents](#documents)
     - [DELETE /documents/delete_document/:id](#documentsdelete_documentid)
     - [POST /documents/update_document](#documentsupdate_document)
     - [POST /documents/create_document](#documentscreate_document)

2. [Примеры ответов](#Примеры-ответов)
   - [CreatedDocument](#createddocument)
   - [User](#user)
   - [Document](#document)
   - [Ошибка авторизации](#auth_error)
   - [Ошибка сервера](#server_error)
   - [Ошибка валидации](#validation_error)

## Эндпоинты:

### /healthcheck

Пример **GET** запроса:

```text
curl --location 'http://localhost:5000/healthcheck'
```

Пример ответа:

```text
ok
```

### /auth

#### /auth/login

Пример **POST** запроса:

```text
curl --location 'http://localhost:5000/auth/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "admin",
    "password": "Admin"
}'
```

Пример ответа:

```text
{
    "user": {
        "role": "admin",
        "id": 1,
        "lastName": "Админ",
        "firstName": "",
        "patrName": "",
        "gender": "Мужской"
    },
    "access_token": "token"
}
```

### /users

#### /users/create_users

Пример **POST** запроса:

```text
curl --location 'http://localhost:5000/users/create_users' \
--header 'Content-Type: application/json' \
--header 'authorization: токен из /auth/login' \
--data '---Пример из example.json---'
```

Пример ответа:

```text
[
    {
        "status": "fulfilled" # Либо "rejected" - если ошибка,
        "value": CreatedDocument
    }
]
```

#### /users/get_all_users

Пример **GET** запроса:

```text
curl --location 'http://localhost:5000/users/get_all_users/?offset=0&limit=5' \
--header 'authorization: токен из /auth/login'
```

Пример ответа:

```text
[CreatedDocument]
```

#### /users/find_user_by_name

Пример **GET** запроса:

```text
curl --location 'http://localhost:5000/users/find_user_by_name/?offset=0&limit=5&name=---любая часть ФИО---' \
--header 'authorization: токен из /auth/login'
```

Пример ответа:

```text
[CreatedDocument]
```

#### /users/delete_user/:id

Пример **DELETE** запроса:

```text
curl --location --request DELETE 'http://localhost:5000/users/delete_user/16' \
--header 'authorization: токен из /auth/login'
```

Пример ответа: только status 200

#### /users/about_me

Пример **GET** запроса:

```text
curl --location 'http://localhost:5000/users/about_me' \
--header 'authorization: токен из /auth/login'
```

Пример ответа:

```text
CreatedDocument
```

#### /users/update_user

Пример **POST** запроса:

```text
curl --location 'http://localhost:5000/users/update_user' \
--header 'Content-Type: application/json' \
--header 'authorization: токен из /auth/login' \
--data 'User'
```

Пример ответа: только status 200

### /documents

#### /documents/delete_document/:id

Пример **DELETE** запроса:

```text
curl --location --request DELETE 'http://localhost:5000/documents/delete_document/16' \
--header 'authorization: токен из /auth/login'
```

Пример ответа: только status 200

#### documents/update_document

Пример **POST** запроса:

```text
curl --location 'http://localhost:5000/documents/update_document' \
--header 'Content-Type: application/json' \
--header 'authorization: токен из /auth/login' \
--data 'Document'
```

Пример ответа: только status 200

#### /documents/create_document

Пример **POST** запроса:

```text
curl --location 'http://localhost:5000/documents/create_document' \
--header 'Content-Type: application/json' \
--header 'authorization: токен из /auth/login' \
--data 'Document'
```

## Примеры ответов

#### CreatedDocument:

```text
{
    "user": User,
    "documents": [Document, ...]
}
```

#### User:

```text
{
    "lastName": string,
    "firstName": string,
    "patrName": string | null,
    "sex": number,
    "id": number
}
```

#### Document:

```text
{
    "id": number,
    "type": number,
    "userId": number,
    "data": {
        "referralId": string,
        "referralDate": string,
        "senderName": string,
        "name": string | null,
        "series": string | number | null,
        "number": string | null,
        "beginDate": string | null,
        "endDate": string | null,
        "issuedName": string | null
    }
}
```

#### Auth_error:

```text
{
    "message": "Unauthorized",
    "statusCode": 401
}
```

#### Server_error:

```text
{
    "message": "Internal server error",
    "statusCode": 500
}
```

#### Validation_error. Проблема с параметрами/телом запроса. Подробное описание неверных частей (включая массивы):

```text
{
    "statusCode": 400,
    "message": "Validation failed",
    "errors": [
        {
            "code": "invalid_type",
            "expected": "string",
            "received": "undefined",
            "path": [
                "username"
            ],
            "message": "Required"
        }
    ]
}
```
