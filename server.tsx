import * as express from 'express';
import * as next from 'next';
import * as cors from 'cors';
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {ApolloServer} from 'apollo-server-express';
import {IncomingMessage, ServerResponse} from 'http';
import {buildSchema} from 'type-graphql';
import {RegisterUserResolver} from './server/modules/user/register';
import {LoginResolver, LOCAL_SECRET} from './server/modules/user/login';
import {defaultConnection as con} from './connection';
import * as jwt from 'jsonwebtoken';
require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';
const app = next({dev: isDev});
const handle = app.getRequestHandler();
const server = express();
const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    return createConnection({
      name: con.name,
      type: 'mysql',
      host: con.host,
      port: con.port,
      username: con.username,
      password: con.password,
      database: con.database,
      synchronize: true,
      logging: true,
      entities: [...con.entities],
    });
  })
  .then(() => {
    return buildSchema({
      resolvers: [RegisterUserResolver, LoginResolver],
      authChecker: ({args}) => {
        if (args.jwtToken) {
          try {
            const secret = process.env.JWT_SECRET || LOCAL_SECRET;
            const verified: any = jwt.verify(args.jwtToken, secret);
            console.log(verified);
            return true;
          } catch (ex) {
            return false;
          }
        }
        return false;
      },
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
