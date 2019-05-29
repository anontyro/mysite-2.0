import {BlogResolver} from './blog/blog';
import {FileResolver} from './file/file';
import {LoginResolver} from './user/login';
import {RegisterUserResolver} from './user/register';
import {UploadResolver} from './file/upload';
import {XkcdResolver} from './external/xkcd';

const RESOLVER_LIST = [
  BlogResolver,
  FileResolver,
  LoginResolver,
  RegisterUserResolver,
  UploadResolver,
  XkcdResolver,
];

export default RESOLVER_LIST;
