import {BlogResolver} from './blog/blog';
import {FileResolver} from './file/file';
import {LoginResolver} from './user/login';
import {RegisterUserResolver} from './user/register';
import {UploadResolver} from './file/upload';

const RESOLVER_LIST = [
  BlogResolver,
  FileResolver,
  LoginResolver,
  RegisterUserResolver,
  UploadResolver,
];

export default RESOLVER_LIST;
