import User from './server/entity/User';
import MyBlog from './server/entity/MyBlog';

const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

export const defaultConnection = {
  name: 'default',
  type: 'mysql',
  host: DB_HOST,
  port: 3306,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, MyBlog],
};
