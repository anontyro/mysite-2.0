import {Resolver, Query, Mutation, Arg} from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import User from '../../entity/User';
import {Like} from 'typeorm';

@Resolver()
export class RegisterUserResolver {
  @Query(() => String)
  async hello() {
    return 'hello world';
  }

  @Query(() => [User])
  async findUser(
    @Arg('email', {nullable: true}) email: string,
    @Arg('firstName', {nullable: true}) firstName: string,
    @Arg('lastName', {nullable: true}) lastName: string
  ): Promise<User[]> {
    if (email) {
      const userList: User[] = await User.find({
        where: {
          email: Like(`%${email}%`),
        },
      });

      return userList;
    }
    if (firstName && lastName) {
      const userList: User[] = await User.find({
        where: {
          firstName: Like(`%${firstName}%`),
          lastName: Like(`%${lastName}%`),
        },
      });

      return userList;
    }
    if (firstName) {
      const userList: User[] = await User.find({
        where: {
          firstName: Like(`%${firstName}%`),
        },
      });

      return userList;
    }
    if (lastName) {
      const userList: User[] = await User.find({
        where: {
          lastName: Like(`%${lastName}%`),
        },
      });

      return userList;
    }
    return [];
  }

  @Mutation(() => User)
  async register(
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      isActive: false,
      email,
      password: hashedPassword,
    }).save();
    return user;
  }
}
