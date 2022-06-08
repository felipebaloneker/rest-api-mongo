FROM node:16
WORKDIR /app

COPY package.json ./

RUN yarn

COPY ..

RUN yarn compile