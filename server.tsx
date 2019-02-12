import * as express from 'express';
import * as next from 'next';
import * as cors from 'cors';
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {ApolloServer} from 'apollo-server-express';
import {IncomingMessage, ServerResponse} from 'http';
import {buildSchema} from 'type-graphql';
import {RegisterUserResolver} from './server/modules/user/register';

const isDev = process.env.NODE_ENV !== 'production';
const app = next({dev: isDev});
const handle = app.getRequestHandler();
const server = express();
const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    return createConnection();
  })
  .then(() => {
    return buildSchema({
      resolvers: [RegisterUserResolver],
    });
  })
  .then(schema => {
    const apolloServer = new ApolloServer({schema});

    apolloServer.applyMiddleware({app: server});

    server.use(cors());
    server.get('*', (req: IncomingMessage, res: ServerResponse) =>
      handle(req, res)
    );
    server.listen(PORT, (err: any) => {
      if (err) {
        throw err;
      }
      console.log(`Server started on port: ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex);
    process.exit(1);
  });
