import { Field, ObjectType, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }

  @Field()
  @Directive('@external')
  public id: string;

  @Field()
  public name: string;
}
