FROM node:20

WORKDIR ./app

ENV PORT=

EXPOSE $PORT

COPY . .

RUN npm install

ENTRYPOINT npm run start:dev