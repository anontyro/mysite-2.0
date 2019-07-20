import {Resolver, Query, Arg} from 'type-graphql';
import fetch from 'node-fetch';
import GhostBlog, {IGhostBlog, IGhostPost} from '../../entity/GhostBlog';
require('dotenv').config();

const CONTENT_KEY = process.env.GHOST_CONTENT_KEY;
const URL = `https://blog.alexwilkinson.co/ghost/api/v2/content/`;
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
    const shouldAddParam = key && value && key.length > 0 && value.length > 0;
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
  async GhostPosts(
    @Arg('page', {nullable: true}) page: number,
    @Arg('limit', {nullable: true}) limit: number
  ): Promise<IGhostBlog> {
    const includeParams = !!page || !!limit;
    const params = includeParams
      ? [{key: 'page', value: page}, {key: 'limit', value: limit}]
      : [];
    const url = getPostList(...params);
    const response = await fetch(url);
    const json: IGhostBlog = await response.json();
    return json;
  }
  @Query(() => GhostBlog)
  async GhostPost(@Arg('slug') slug: string): Promise<IPosts> {
    const url = getPostBySlug(slug);
    const response = await fetch(url);
    const json: IPosts = await response.json();

    return json;
  }

  @Query(() => String)
  async GhostPostsUrl(
    @Arg('page', {nullable: true}) page: number,
    @Arg('limit', {nullable: true}) limit: number
  ): Promise<String> {
    const includeParams = !!page || !!limit;
    const params = includeParams
      ? [{key: 'page', value: page}, {key: 'limit', value: limit}]
      : [];
    const url = getPostList(...params);
    return url;
  }
}
