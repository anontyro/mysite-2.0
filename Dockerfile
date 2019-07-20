# SETUP
FROM node:10-alpine AS builder

WORKDIR /home/node/app
COPY . .

RUN npm install && npm run docker:build

# RUN IMAGE
FROM node:10-alpine
ENV NODE_ENV=production

# SET JWT_TOKEN SECRET
ARG JWT_SECRET
ENV JWT_SECRET=$JWT_SECRET
ARG GHOST_API_URL
ENV GHOST_API_URL=$GHOST_API_URL
ARG GHOST_CONTENT_KEY
ENV GHOST_CONTENT_KEY=$GHOST_CONTENT_KEY
ARG GHOST_ADMIN_KEY
ENV GHOST_ADMIN_KEY=$GHOST_ADMIN_KEY
RUN if [ "x$JWT_SECRET" = "x" ] ; then echo no JWT_SECRET provided ; else echo JWT_SECRET is set to: $JWT_SECRET; fi
RUN if [ "x$GHOST_API_URL" = "x" ] ; then echo no GHOST_API_URL provided ; else echo GHOST_API_URL is set to: $GHOST_API_URL; fi
RUN if [ "x$GHOST_CONTENT_KEY" = "x" ] ; then echo no GHOST_CONTENT_KEY provided ; else echo GHOST_CONTENT_KEY is set to: $GHOST_CONTENT_KEY; fi
RUN if [ "x$GHOST_ADMIN_KEY" = "x" ] ; then echo no GHOST_ADMIN_KEY provided ; else echo GHOST_ADMIN_KEY is set to: $GHOST_ADMIN_KEY; fi
WORKDIR /home/node/app

COPY ./package* ./
RUN npm install && \
  npm run build \
  npm cache clean --force

COPY --from=builder /home/node/app/dist ./dist

# EXPOSE PORT AND START APP

EXPOSE 3000

CMD npm run prod:server