FROM node:10-jessie

WORKDIR /usr/src/app

COPY client/package.json .

ENV PORT 3000
EXPOSE 3000

RUN npm set unsafe-perm true
RUN npm install

CMD [ "npm", "run", "start:prod" ]