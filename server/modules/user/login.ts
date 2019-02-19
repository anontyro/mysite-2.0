import {Resolver, Query, Arg} from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import User from '../../entity/User';
import * as jwt from 'jsonwebtoken';
require('dotenv').config();

export const LOCAL_SECRET = '123efg34wsdfv43rwfcse3r4t5htrbfvcf3r43qwfv';
const TOKEN_EXPIRY_SECONDS = 86400;

@Resolver()
export class LoginResolver {
  @Query(() => String)
  async Login(
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<any> {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return 'no user found';
    }
    if (!user.isActive) {
      return 'user is not active';
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    const secret = process.env.JWT_SECRET || LOCAL_SECRET;

    if (isValidPassword) {
      const token = jwt.sign(
        {id: user.id, email: user.email, issued: Date.now()},
        secret,
        {
          expiresIn: TOKEN_EXPIRY_SECONDS,
        }
      );
      return token;
    }

    return 'no user found with that username and password';
  }

  @Query(() => String)
  async CheckToken(@Arg('jwtToken') token: string) {
    try {
      const secret = process.env.JWT_SECRET || LOCAL_SECRET;
      const verified: any = jwt.verify(token, secret);
      console.log(verified);
      return `Token is valid for user: ${verified.email}`;
    } catch (ex) {
      return 'token is not valid';
    }
  }
}
