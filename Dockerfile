# Use a base image suitable for ARM64 architecture
FROM --platform=linux/arm64 node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

CMD [ "yarn", "run", "dev" ]
