import {Resolver, Query, Arg, Authorized, Mutation} from 'type-graphql';
import MyBlog, {Blog} from '../../entity/MyBlog';
import {Like} from 'typeorm';
import * as moment from 'moment';
import {slugify} from '../../utils/genericUtil';
import {IToken, validateToken} from '../../utils/authUtil';
import {DEFAUlT_IMG} from '../../data/serverConsts';

@Resolver()
export class BlogResolver {
  @Query(() => [MyBlog])
  async blogList(
    @Arg('order', {nullable: true}) order: string,
    @Arg('jwtToken', {nullable: true}) token: string
  ): Promise<any> {
    let blogList: any = [];
    console.log(order);
    if (token) {
      blogList = await MyBlog.find({
        order: {
          datePublished: 'ASC',
        },
      });
    } else {
      blogList = await MyBlog.find({
        where: {
          draft: false,
        },
      });
    }
    return blogList;
  }

  @Query(() => MyBlog)
  async blog(@Arg('title') title: string): Promise<any> {
    const blog = await MyBlog.find({
      where: {
        title: Like(`%${title}%`),
      },
    });
    return blog;
  }

  @Authorized()
  @Mutation(() => MyBlog)
  async createBlog(
    @Arg('title') title: string,
    @Arg('body') body: string,
    @Arg('tags', {nullable: true}) tags: string,
    @Arg('datePublished', {nullable: true}) datePublished: string,
    @Arg('draft', {nullable: true}) draft: boolean,
    @Arg('coverImage', {nullable: true}) coverImage: string,
    @Arg('thumbNail', {nullable: true}) thumbNail: string,
    @Arg('jwtToken') token: string
  ): Promise<any> {
    const now = moment();
    let slug = slugify(title);
    const tokenObject: IToken = validateToken(token);

    const existingSlug = await MyBlog.find({
      where: {
        slug: slug,
      },
    });

    if (existingSlug.length > 0) {
      slug += `-${existingSlug.length}`;
    }

    const newBlog: Blog = {
      title,
      body,
      tags: tags || 'myBlog',
      datePublished: datePublished ? moment(datePublished).toDate() : undefined,
      dateCreated: now.toDate(),
      draft,
      slug,
      author: tokenObject.id,
      coverImage: coverImage || DEFAUlT_IMG,
      permaLink: slug,
      thumbNail: thumbNail ? thumbNail : DEFAUlT_IMG,
      timeRequired: 0,
    };

    const entry = await MyBlog.create({
      ...newBlog,
    }).save();

    return entry;
  }
}
