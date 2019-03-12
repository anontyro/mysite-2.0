import * as express from 'express';
import * as next from 'next';
import * as cors from 'cors';
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {ApolloServer} from 'apollo-server-express';
import {IncomingMessage, ServerResponse} from 'http';
import {buildSchema} from 'type-graphql';
import RESOLVER_LIST from './server/modules/index';
import {defaultConnection as con} from './connection';
import {validateToken} from './server/utils/authUtil';
import {STATIC_DIR} from './server/data/serverConsts';
require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';
const app = next({dev: isDev, conf: {distDir: 'dist'}});
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
      resolvers: [...RESOLVER_LIST],
      authChecker: ({args}) => {
        if (args.jwtToken) {
          return validateToken(args.jwtToken);
        }
        return false;
      },
    });
  })
  .then(schema => {
    const apolloServer = new ApolloServer({
      schema,
      tracing: true,
      cacheControl: true,
      introspection: true,
      playground: true,
    });

    apolloServer.applyMiddleware({app: server});

    server.use(cors());
    server.use(express.static(STATIC_DIR));
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
