import {Resolver, Query, Arg} from 'type-graphql';
import BrewDog, {IBrewDog, BeerArgs} from '../../entity/BrewDog';
const punkapi = require('punkapi-lib');

@Resolver()
export class BrewDogResolver {
  @Query(() => [BrewDog])
  async BrewDogBeer(
    @Arg('name', {nullable: true}) name: string,
    @Arg('args', () => BeerArgs, {
      nullable: true,
      description:
        'Argument array for any values to query by such as beer_name, food full list on: https://punkapi.com/documentation/v2',
    })
    args: BeerArgs
  ): Promise<[IBrewDog]> {
    let opts = {};
    if (name || args) {
      if (name) {
        opts = {...opts, beer_name: name};
      }
      if (args) {
        opts = {...opts, ...args};
      }
      return punkapi.beers(opts);
    }

    const beer = punkapi.random();
    return beer;
  }
}
