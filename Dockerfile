FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN apk update && apk add bash
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .