import {
  Query,
  Resolver,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { User } from 'apps/users-service/src/user.entity';

@Resolver(() => Post)
export class PostsResolvers {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => Post)
  getPosts(@Args('id') id: number) {
    return this.postsService.findById(id);
  }

  @ResolveField(() => User)
  public user(@Parent() post) {
    return { __typename: 'User', id: post.userId };
  }
}
