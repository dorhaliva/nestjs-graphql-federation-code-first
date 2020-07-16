import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Resolver(() => User)
export class UsersResolvers {
  constructor(private readonly usersService: UsersService) {}

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<User> {
    return this.usersService.findById(reference.id);
  }

  @Query(() => User)
  async getUser(@Args('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }
}
