FROM node:14

WORKDIR /SERVER

COPY package.json .

RUN npm install

COPY ./src ./src

CMD npm start