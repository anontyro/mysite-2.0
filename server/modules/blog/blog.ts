import {Resolver, Query, Arg, Authorized, Mutation} from 'type-graphql';
import MyBlog from '../../entity/MyBlog';
import {Like} from 'typeorm';
import moment from 'moment';
@Resolver()
export class BlogResolver {
  @Query(() => [MyBlog])
  async blogList(
    @Arg('order', {nullable: true}) order: string,
    @Arg('jwtToken', {nullable: true}) token: string
  ): Promise<any> {
    let blogList: any = [];

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
  }

  @Authorized()
  @Mutation(() => MyBlog)
  async createBlog(
    @Arg('title') title: string,
    @Arg('body') body: string,
    @Arg('tags', {nullable: true}) tags: string,
    @Arg('datePublished') datePublished: string,
    @Arg('dateCreated') dateCreated: string,
    @Arg('draft', {nullable: true}) draft: string,
    @Arg('coverImage', {nullable: true}) coverImage: string,
    @Arg('thumbNail', {nullable: true}) thumbNail: string,
    @Arg('jwtToken') token: string
  ): Promise<any> {
    const now = moment().format();
  }
}
