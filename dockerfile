FROM node:10

WORKDIR /usr/src/app

COPY /build/. ./build

EXPOSE 6000

RUN npm install -g serve

CMD [ "serve", "-s", "build", "-p", "6000"]
