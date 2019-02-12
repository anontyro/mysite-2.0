import {Resolver, Query, Mutation, Arg} from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import {User} from '../../entity/User';

@Resolver()
export class RegisterUserResolver {
  @Query(() => String)
  async hello() {
    return 'hello world';
  }

  @Mutation(() => User)
  async register(
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {
    const hashedPass = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPass,
      isActive: false,
    }).save();

    return user;
  }
}
