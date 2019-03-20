# SETUP
FROM node:10-alpine AS builder

WORKDIR /home/node/app
COPY . .

RUN npm install && npm run docker:build

# RUN IMAGE
FROM node:10-alpine
ENV NODE_ENV=production
ARG JWT_SECRET
ENV JWT_SECRET={$JWT_SECRET}
RUN if [ "x$JWT_SECRET" = "x" ] ; then echo no JWT_SECRET provided ; else echo JWT_SECRET is set to: $JWT_SECRET; fi
WORKDIR /home/node/app

COPY ./package* ./
RUN npm install && \
  npm run build \
  npm cache clean --force

COPY --from=builder /home/node/app/dist ./dist

# EXPOSE PORT AND START APP

EXPOSE 3000

CMD npm run prod:server