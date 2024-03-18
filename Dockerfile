FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .


CMD [ "yarn", "run", "dev" ]
