import {Resolver, Mutation, Arg} from 'type-graphql';
import {BLOG_IMAGE_DIR} from '../../data/serverConsts';
import {GraphQLUpload} from 'graphql-upload';
import {createWriteStream} from 'fs';
import Upload from '../../../interfaces/Upload';

@Resolver()
export class UploadResolver {
  @Mutation(() => Boolean)
  async addBlogImage(@Arg('image', () => GraphQLUpload)
  {
    createReadStream,
    filename,
  }: Upload): Promise<Boolean> {
    return new Promise(async (resolve, reject) => {
      createReadStream()
        .pipe(createWriteStream(`${BLOG_IMAGE_DIR}/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false));
    });
  }
}

// TEST CURL USED TO UPLOAD A FILE CURRENTLY SET TO react-banner,png
// curl localhost:3000/graphql \
//   -F operations='{"query":"mutation AddBlogImage($image: Upload!){\n  addBlogImage(image: $image)\n}"}' \
//   -F map='{ "0": ["variables.image"] }' \
//   -F 0=@react-banner.png
