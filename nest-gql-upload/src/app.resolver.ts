// import { Query } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUpload, PubSub } from 'apollo-server-express'; // notice this is not imported from graphql-upload
import { createWriteStream } from 'fs';
import { FileUpload } from 'graphql-upload';

const CONST_EVENT = 'fileAdded';
const pubSub = new PubSub();

@Resolver(of => String)
export class AppResolver {
  // constructor(@Inject('PUB_SUB') private pubSub: PubSubEngine) {}

  @Query(returns => String)
  async hello() {
    return 'Angular NestJs Graphql Upload.';
  }

  @Mutation(() => Boolean)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ): Promise<boolean> {
    pubSub.publish(CONST_EVENT, {
      [CONST_EVENT]: filename + ' uploaded',
    });

    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false)),
    );
  }
}
