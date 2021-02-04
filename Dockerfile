FROM node:15-alpine as builder

WORKDIR /app

# Install dependencys
COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

RUN rm -r .nuxt

RUN yarn build

FROM node:15-alpine

WORKDIR /app

# Install production dependencys
COPY package.json .
COPY yarn.lock .
RUN yarn --production

COPY --from=builder /app/.nuxt .nuxt

COPY --from=builder /app/nuxt.config.js nuxt.config.js

EXPOSE 3000

CMD ["yarn", "start"]
