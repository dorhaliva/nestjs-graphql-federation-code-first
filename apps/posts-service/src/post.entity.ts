import { Field, ID, ObjectType, Directive } from '@nestjs/graphql';
import { User } from 'apps/users-service/src/user.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field()
  public id: number;

  @Field()
  public title: string;

  @Field()
  public userId: number;

  @Field(() => User)
  public user: User;

  constructor(post: Partial<Post>) {
    Object.assign(this, post);
  }
}