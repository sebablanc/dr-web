FROM node:18-alpine as build-step

WORKDIR /app

COPY package*.json /app/

RUN npm install -g ionic

RUN npm install

COPY ./ /app/

RUN ionic build --prod

FROM nginx:1.17.1-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-step /app/www/ /usr/share/nginx/html

EXPOSE 80