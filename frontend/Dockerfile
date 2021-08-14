FROM node:14-alpine AS builder

RUN npm i -g npm
RUN mkdir -p /src/app/
COPY ./package.json ./package-lock.json /src/app/
WORKDIR /src/app
RUN npm install

COPY ./ /src/app
RUN npm run build

FROM nginx:alpine
COPY --from=builder /src/app/build /usr/share/nginx/html/