# Этап 1: Сборка проекта
FROM node:18 as build
WORKDIR /app
COPY . ./

RUN npm install -g pnpm@9.3.0

RUN pnpm install --frozen-lockfile

RUN pnpm run build

# Этап 2: Запуск приложения
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 5000 

CMD [ "node", "dist/src/main.js" ]