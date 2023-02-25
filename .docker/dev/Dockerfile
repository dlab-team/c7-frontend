FROM node:18.14-alpine3.17

COPY package.json ./

RUN npm install

WORKDIR /frontend

COPY . .

CMD ["npm", "start"]