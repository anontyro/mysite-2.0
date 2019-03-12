# SETUP
FROM node:10-alpine AS builder

WORKDIR /home/node/app
COPY . .

RUN npm install && npm run docker:build

# RUN IMAGE
FROM node:10-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app

COPY ./package* ./
RUN npm install && \
  npm run build \
  npm cache clean --force

COPY --from=builder /home/node/app/dist ./dist

# EXPOSE PORT AND START APP

EXPOSE 3000

CMD npm run prod:server