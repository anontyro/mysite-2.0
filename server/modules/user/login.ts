import { Resolver, Query, Arg } from "type-graphql";
import * as bcrypt from "bcryptjs";
import User from "../../entity/User";
import { validateToken, createNewToken } from "../../utils/authUtil";

@Resolver()
export class LoginResolver {
  @Query(() => String)
  async Login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<any> {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return "no user found with that username and password";
    }
    if (!user.isActive || user.accessLevel < 1) {
      return "user is not active";
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (isValidPassword) {
      const token = createNewToken(user);
      return token;
    }

    return "no user found with that username and password";
  }

  @Query(() => String)
  async CheckToken(@Arg("jwtToken") token: string) {
    const validatedToken = validateToken(token);
    if (validatedToken) {
      return `Token is valid for user: ${validatedToken.email}`;
    }
    return "token is not valid";
  }
}
