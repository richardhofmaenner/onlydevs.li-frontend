FROM node:15-alpine

WORKDIR /app

EXPOSE 3000

CMD ["yarn", "dev"]
