import {ObjectType, Field} from 'type-graphql';

@ObjectType()
class PrimLanguage {
  @Field({nullable: true})
  color: string;

  @Field({nullable: true})
  name: string;
}

@ObjectType()
export class GitPinnedRepos {
  @Field({nullable: true})
  createdAt: Date;

  @Field({nullable: true})
  name: string;

  @Field({nullable: true})
  descriptionHTML: string;

  @Field({nullable: true})
  isPrivate: boolean;

  @Field(() => PrimLanguage, {nullable: true})
  primaryLanguage: PrimLanguage;

  @Field({nullable: true})
  shortDescriptionHTML: string;

  @Field({nullable: true})
  updatedAt: string;

  @Field({nullable: true})
  url: string;
}
