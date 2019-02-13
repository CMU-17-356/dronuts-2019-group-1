FROM node:11.7-alpine as client
MAINTAINER dronuts-2019-group-1

WORKDIR /usr/app/client
COPY client/package*.json ./
RUN npm install -qy
COPY client/ ./
RUN npm run build

# Setup the server

FROM node:9.4.0-alpine

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ ./

ENV PORT 30001

EXPOSE 3001

CMD ["npm", "start"]












# # Change working directory
# WORKDIR /usr/src/app

# # Install App Dependencies
# COPY package*.json ./
# RUN npm install

# # Copy App Source
# COPY . .
# #TODO Run any build scripts here

# EXPOSE 80
# CMD [ "npm", "start" ]
