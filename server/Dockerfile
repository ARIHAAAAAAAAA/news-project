FROM node:18-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install -g typescript

RUN npm install -g nodemon

COPY . .

RUN npm install

EXPOSE 4500

CMD ["npm", "run", "dev"]
