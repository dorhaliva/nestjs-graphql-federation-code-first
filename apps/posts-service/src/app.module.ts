import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { PostsModule } from './posts.module';
import { User } from 'apps/users-service/src/user.entity';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: 'post.gql',
      playground: true,
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
    PostsModule,
  ],
})
export class AppModule {}
