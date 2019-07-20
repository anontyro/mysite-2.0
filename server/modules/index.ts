import {BlogResolver} from './blog/blog';
import {GhostBlogResolver} from './blog/ghostBlog';
import {FileResolver} from './file/file';
import {LoginResolver} from './user/login';
import {RegisterUserResolver} from './user/register';
import {UploadResolver} from './file/upload';
import {XkcdResolver} from './external/xkcd';
import {BrewDogResolver} from './external/brewDog';
import {GithubResolver} from './external/gitHub';

const RESOLVER_LIST = [
  BlogResolver,
  FileResolver,
  LoginResolver,
  RegisterUserResolver,
  UploadResolver,
  XkcdResolver,
  BrewDogResolver,
  GhostBlogResolver,
  GithubResolver,
];

export default RESOLVER_LIST;
