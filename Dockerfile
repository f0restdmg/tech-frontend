# Этап 1: Сборка приложения
FROM node:22.9.0-alpine as builder

WORKDIR /app

# Копирование файлов package.json и package-lock.json в /app
COPY package.json package-lock.json ./

# Копирование всех остальных файлов проекта в /app
COPY . .

# Установка зависимостей
RUN npm ci

# Сборка Next.js приложения
RUN npm run build

# Этап 2: Запуск приложения
FROM node:22.9.0-alpine as runner

WORKDIR /app

# Копирование необходимых файлов из билдера
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Запуск приложения через node
CMD ["node", "server.js"]