import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { Upload } from './upload.scalar';

@Module({
  imports: [
    Upload,
    GraphQLModule.forRoot({
      // typePaths: ['./**/*.graphql'],
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    AppResolver,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
})
export class AppModule {}
