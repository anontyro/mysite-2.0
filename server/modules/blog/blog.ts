import {Resolver, Query, Arg, Authorized, Mutation} from 'type-graphql';
import MyBlog, {Blog} from '../../entity/MyBlog';
import {Like, LessThanOrEqual} from 'typeorm';
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
    const now = moment().toDate();

    let blogList: any = [];
    if (token && validateToken(token)) {
      blogList = await MyBlog.find({
        order: {
          datePublished: order ? 'ASC' : 'DESC',
        },
      });
    } else {
      blogList = await MyBlog.find({
        where: {
          draft: false,
          datePublished: LessThanOrEqual(now),
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

  @Authorized()
  @Mutation(() => MyBlog)
  async updateBlog(
    @Arg('id') id: number,
    @Arg('jwtToken') _token: string,
    @Arg('title', {nullable: true}) title: string,
    @Arg('body', {nullable: true}) body: string,
    @Arg('tags', {nullable: true}) tags: string,
    @Arg('datePublished', {nullable: true}) datePublished: string,
    @Arg('draft', {nullable: true}) draft: boolean,
    @Arg('coverImage', {nullable: true}) coverImage: string,
    @Arg('thumbNail', {nullable: true}) thumbNail: string
  ): Promise<any> {
    const now = moment();

    const blog = await MyBlog.findOne(id);
    if (!blog) {
      throw new Error(`No blog found with ID: ${id}`);
    }

    const tagUpdate = tags ? `${blog.tags}, ${tags}` : blog.tags;

    blog.title = title || blog.title;
    blog.body = body || blog.body;
    blog.tags = tagUpdate;
    blog.datePublished = datePublished
      ? moment(datePublished).toDate()
      : blog.datePublished;
    blog.draft = draft || blog.draft;
    blog.coverImage = coverImage || blog.coverImage;
    blog.dateLastModified = now.toDate();
    blog.thumbNail = thumbNail ? thumbNail : DEFAUlT_IMG;

    await MyBlog.save(blog);

    return blog;
  }

  @Authorized()
  @Mutation(() => MyBlog)
  async publishBlog(
    @Arg('id') id: number,
    @Arg('jwtToken') _token: string,
    @Arg('datePublished', {nullable: true}) datePublished: string
  ): Promise<any> {
    const now = moment();

    const blog = await MyBlog.findOne(id);
    if (!blog) {
      throw new Error(`Blog with ID ${id} doesn't exist`);
    }
    if (!blog.draft) {
      throw new Error(`Blog: ${id} is already published`);
    }
    blog.draft = false;
    blog.datePublished = moment(datePublished).toDate() || now.toDate();

    await MyBlog.save(blog);

    return blog;
  }
}
