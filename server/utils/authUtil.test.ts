import anyTest, {TestInterface} from 'ava';
// import * as sinon from 'sinon';
import {
  myAuthChecker,
  AuthArgs,
  createNewToken,
  isValidJWTFormat,
  validateToken,
  IToken,
} from './authUtil';
import {IUser} from '../entity/User';

const test = anyTest as TestInterface<{
  args: AuthArgs;
  user: IUser;
}>;

test.beforeEach(t => {
  const args: AuthArgs = {
    jwtToken: 'ererer12sce',
  };

  const user: IUser = {
    email: 'alex@email.com',
    id: 1234,
    firstName: 'alex',
    lastName: 'wilkinson',
    isActive: true,
    password: '1234',
  };

  t.context = {
    args,
    user,
  };
});

function sleep(milliseconds: number) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

test('myAuthChecker with no args will return false', t => {
  t.false(myAuthChecker({}));
});

test('myAuthChecker with args will return true with valid JWT token', t => {
  t.true(myAuthChecker(t.context.args));
});

test('createNewToken will return a JWT token', t => {
  const user: IUser = t.context.user;

  const token = createNewToken(user);

  t.truthy(token);
  t.true(isValidJWTFormat(token));
});

test('createNewToken will expire', t => {
  const user: IUser = t.context.user;

  const token = createNewToken(user, 1);
  sleep(1000);
  console.log(token);
  t.false(!!validateToken(token));
});

test('isTokenValid will return true when given a valid jwt 2 token', t => {
  const user: IUser = t.context.user;

  const token = createNewToken(user);

  t.true(!!validateToken(token));
});

test('isTokenValid valid tokens will contain user email and id', t => {
  const user: IUser = t.context.user;

  const token = createNewToken(user);
  const validatedToken: IToken = validateToken(token);
  t.truthy(validatedToken.id);
  t.truthy(validatedToken.email);
});

test('isTokenValid will return false when given a fake token', t => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjJ9.tbDepxpstvGdW8TC3G8zg4B6rUYAOvfzdceoH48wgRQ';

  t.false(!!validateToken(token));
});

test('isValidJWTFormat will return true when given a valid token', t => {
  t.true(
    isValidJWTFormat(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiZW1haWwiOiIiLCJpc3N1ZWQiOjE1NTA2NzMyNzU1MTUsImlhdCI6MTU1MDY3MzI3NSwiZXhwIjoxNTUwNzU5Njc1fQ.kn3oy04F3EeXZtym2Sk2sTl9hVYij-vuPjwrKFK7_pA'
    )
  );
});

test('isValidJWTFormat will return false when given an invalid valid token', t => {
  t.false(
    isValidJWTFormat(
      'eyJpZCI6MTIzNCwiZW1haWwiOiIiLCJpc3N1ZWQiOjE1NTA2NzMyNzU1MTUsImlhdCI6MTU1MDY3MzI3NSwiZXhwIjoxNTUwNzU5Njc1fQkn3oy04F3EeXZtym2Sk2sTl9hVYij-vuPjwrKFK7_pA'
    )
  );
  t.false(isValidJWTFormat(''));
  t.false(isValidJWTFormat('1234'));
});
