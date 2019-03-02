import {Resolver, Query} from 'type-graphql';
import {mapDirectory} from '../../utils/fileUtil';
import {BLOG_IMAGE_DIR, BLOG_IMAGE_STATIC} from '../../data/serverConsts';

@Resolver()
export class FileResolver {
  @Query(() => [String])
  async blogImageList(): Promise<any> {
    const imageList = await mapDirectory(BLOG_IMAGE_DIR);
    const output = imageList.map((file: string) => {
      return BLOG_IMAGE_STATIC + file;
    });
    return output;
  }
}
