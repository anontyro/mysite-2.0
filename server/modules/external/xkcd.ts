import {Resolver, Query, Arg} from 'type-graphql';
import fetch from 'node-fetch';
import Xkcd, {IXkcd} from '../../entity/Xkcd';
import {randomIntFromInterval} from '../../utils/genericUtil';

const XKCD_URL = 'https://xkcd.com';
const XKCD_JSON = 'info.0.json';

const getCurrentComic = async (): Promise<IXkcd> => {
  const currentURl = `${XKCD_URL}/${XKCD_JSON}`;
  const currentResponse = await fetch(currentURl);
  return currentResponse.json();
};

@Resolver()
export class XkcdResolver {
  @Query(() => Xkcd)
  async XKCDpost(@Arg('id', {nullable: true}) id: number): Promise<IXkcd> {
    let url = XKCD_URL;
    if (id) {
      url = `${url}/${id}`;
    }
    url = `${url}/${XKCD_JSON}`;
    const response = await fetch(`${url}`);
    const json = await response.json();
    return json;
  }

  @Query(() => Xkcd)
  async XKCDrandom(): Promise<IXkcd> {
    const current: IXkcd = await getCurrentComic();

    const rand = randomIntFromInterval(1, current.num);

    const response = await fetch(`${XKCD_URL}/${rand}/${XKCD_JSON}`);
    const responseJson = await response.json();

    return responseJson;
  }
}
