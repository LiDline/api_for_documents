# Этап 1: Сборка проекта
FROM node:18 as build
ENV TZ=Europe/Moscow
WORKDIR /app
COPY . ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

RUN pnpm run build

# Этап 2: Запуск приложения
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 80 

CMD [ "node", "dist/main.js" ]