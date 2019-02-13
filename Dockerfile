
FROM node:8-alpine as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install
RUN npm uninstall ajv
RUN npm install ajv@6.8.1
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

ENV PORT 3001

EXPOSE 3001

CMD ["npm", "start"]