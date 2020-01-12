FROM node:10

WORKDIR /usr/src/app

COPY /build/. ./build

EXPOSE 3000

CMD [ "npm", "run", "start:prod"]