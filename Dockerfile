# Dockerfile for React client

FROM node:18.16-alpine

# Working directory be app
WORKDIR src/app

# Install Dependencies
COPY package.json .

###  Installing dependencies
RUN npm install

# copy local files to app folder
COPY . .

# Exports
EXPOSE 3000

CMD ["npm","start"]