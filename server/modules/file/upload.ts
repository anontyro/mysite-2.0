import {Resolver, Mutation, Arg, Authorized} from 'type-graphql';
import {BLOG_IMAGE_DIR} from '../../data/serverConsts';
import {GraphQLUpload} from 'graphql-upload';
import {createWriteStream} from 'fs';
import Upload from '../../../interfaces/Upload';

@Resolver()
export class UploadResolver {
  @Authorized()
  @Mutation(() => Boolean)
  async addBlogImage(
    @Arg('jwtToken') _: string,
    @Arg('image', () => GraphQLUpload)
    {createReadStream, filename}: Upload
  ): Promise<Boolean> {
    return new Promise(async (resolve, reject) => {
      createReadStream()
        .pipe(createWriteStream(`${BLOG_IMAGE_DIR}/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false));
    });
  }
}

//'{"query":"mutation AddBlogImage($image: Upload!){\n  addBlogImage(image: $image, jwtToken:\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhbGV4d2lsa2luc29uQGdtYWlsLmNvbSIsImlzc3VlZCI6MTU1MTU0NDQxNDM0OCwiaWF0IjoxNTUxNTQ0NDE0LCJleHAiOjE1NTE2MzA4MTR9.437nlZytkor9bnivawzHhMSsb35tG5rdHoumv_ofcRs\")\n}\n"}'

// TEST CURL USED TO UPLOAD A FILE CURRENTLY SET TO react-banner,png
/*
  curl localhost:3000/graphql \
    -F operations='{"query":"mutation AddBlogImage($image: Upload!){\n  addBlogImage(image: $image, jwtToken:\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhbGV4d2lsa2luc29uQGdtYWlsLmNvbSIsImlzc3VlZCI6MTU1MTU0NDQxNDM0OCwiaWF0IjoxNTUxNTQ0NDE0LCJleHAiOjE1NTE2MzA4MTR9.437nlZytkor9bnivawzHhMSsb35tG5rdHoumv_ofcRs\")\n}\n"}' \
    -F map='{ "0": ["variables.image"] }' \
    -F 0=@react-banner.png
*/
