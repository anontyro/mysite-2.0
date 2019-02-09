import * as express from 'express';
import * as next from 'next';
import * as cors from 'cors';
import {IncomingMessage, ServerResponse} from 'http';

const isDev = process.env.NODE_ENV !== 'production';
const app = next({dev: isDev});
const handle = app.getRequestHandler();
const server = express();
const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    server.use(cors());
    server.get('*', (req: IncomingMessage, res: ServerResponse) =>
      handle(req, res)
    );
    server.listen(PORT, err => {
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
