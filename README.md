# api_for_documents

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
cp .env.example .env # Вставьте Url своей БД!
pnpm install --frozen-lockfile
```

### dev

```bash
pnpm run dev
```

## prod

```bash
pnpm build
pnpm start
```

or

```bash
docker build --pull --rm -f "Dockerfile" -t apifordocuments:latest "."
docker run --env-file .env -p 5000:5000 apifordocuments:latest
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
    |            └─ DTO, использующее Zod-схемы для валидации на endoint
    |
    └─ CONST.ts
        └─ Общие константы
```
