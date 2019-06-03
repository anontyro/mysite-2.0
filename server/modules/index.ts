import {BlogResolver} from './blog/blog';
import {FileResolver} from './file/file';
import {LoginResolver} from './user/login';
import {RegisterUserResolver} from './user/register';
import {UploadResolver} from './file/upload';
import {XkcdResolver} from './external/xkcd';
import {BrewDogResolver} from './external/brewDog';

const RESOLVER_LIST = [
  BlogResolver,
  FileResolver,
  LoginResolver,
  RegisterUserResolver,
  UploadResolver,
  XkcdResolver,
  BrewDogResolver,
];

export default RESOLVER_LIST;
