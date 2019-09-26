import {Resolver, Query, Arg} from 'type-graphql';
import fetch from 'node-fetch';
import GhostBlog, {IGhostBlog, IGhostPost} from '../../entity/GhostBlog';

const CONTENT_KEY = process.env.GHOST_CONTENT_KEY;
const URL = `${process.env.GHOST_API_URL}/ghost/api/v2/content/`;
const ENDPOINTS = {
  POSTS: 'posts/',
  POST_BY_SLUG: 'posts/slug/',
  AUTHORS: '/authors/',
};

interface IPosts {
  posts: IGhostPost[];
}

interface Param {
  key: string;
  value: any;
}

const addParams = (url: string, ...params: Param[]) => {
  let output = url;
  let val = '?';
  params.forEach((param: Param) => {
    const {key, value} = param;
    const shouldAddParam = !!(key && value && key.length > 0);
    if (shouldAddParam) {
      output = `${output}${val}${key}=${value}`;
      val = '&';
    }
  });
  return output;
};

const getPostList = (...params: Param[]) => {
  const url = `${URL}${ENDPOINTS.POSTS}`;
  const param = [{key: 'key', value: CONTENT_KEY}, ...params];
  return addParams(url, ...param);
};

const getPostBySlug = (slug: string, ...params: Param[]) => {
  const url = `${URL}${ENDPOINTS.POST_BY_SLUG}${slug}/`;
  const param = [{key: 'key', value: CONTENT_KEY}, ...params];
  return addParams(url, ...param);
};

@Resolver()
export class GhostBlogResolver {
  @Query(() => GhostBlog)
  async ghostPosts(
    @Arg('page', {nullable: true}) page: number,
    @Arg('limit', {nullable: true}) limit: number = 50
  ): Promise<IGhostBlog> {
    const params = [
      {key: 'page', value: page},
      {key: 'limit', value: limit},
      {key: 'include', value: 'tags,authors'},
    ];
    const url = getPostList(...params);
    const response = await fetch(url);
    const json: any = await response.json();
    console.log(json.posts[0].created_at);
    return json;
  }
  @Query(() => GhostBlog)
  async ghostPost(@Arg('slug') slug: string): Promise<IPosts> {
    const url = getPostBySlug(slug);
    console.log(url);
    const response = await fetch(url);
    const json: IPosts = await response.json();

    return json;
  }
}
