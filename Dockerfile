FROM node:lts-alpine

RUN mkdir -p /app

WORKDIR /app
ADD ./package*.json /app/
ADD ./tsconfig* /app/

RUN npm i -D

COPY svelte* /app/
COPY vite* /app/
COPY ./src  /app/src

RUN npm run build
