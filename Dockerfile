FROM node:8-alpine as client
MAINTAINER dronuts-2019-group-1

WORKDIR /usr/app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Setup the server

FROM node:8-alpine

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install
COPY server/ ./

ENV PORT 30001

EXPOSE 3001

CMD ["npm", "start"]
