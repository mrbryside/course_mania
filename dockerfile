FROM node:10

WORKDIR /usr/src/app

COPY /build/. ./build

EXPOSE 6000

CMD [ "npm", "i", "-g", "serve"]

CMD [ "serve", "build", "-p", "6000"]
