FROM node:18-alpine

EXPOSE 5173

WORKDIR /react-vite-app

COPY package*.json ./

RUN npm install

COPY . .


CMD [ "npm","run","dev"]
