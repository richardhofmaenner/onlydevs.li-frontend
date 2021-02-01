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

EXPOSE 3000

USER node

CMD ["yarn", "start"]
