import {ObjectType, Field} from 'type-graphql';
import {Entity} from 'typeorm';

export interface IXkcd {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcripts: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

@ObjectType()
@Entity()
export default class Xkcd {
  @Field({nullable: true})
  month: string;

  @Field({nullable: true})
  num: number;

  @Field({nullable: true})
  link: string;

  @Field({nullable: true})
  year: string;

  @Field({nullable: true})
  news: string;

  @Field({nullable: true})
  safe_title: string;

  @Field({nullable: true})
  transcripts: string;

  @Field({nullable: true})
  alt: string;

  @Field({nullable: true})
  img: string;

  @Field({nullable: true})
  title: string;

  @Field({nullable: true})
  day: string;
}
