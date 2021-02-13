FROM node

# Speed up npm install a little on docker
RUN npm config set registry http://registry.npmjs.org/

# Install webpack globally
RUN npm install webpack -g

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# Build app
RUN ["npm", "build"]

EXPOSE 8080

CMD [ "npm", "start" ]