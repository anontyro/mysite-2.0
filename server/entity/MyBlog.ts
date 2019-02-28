import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';
import {ObjectType, Field, ID} from 'type-graphql';

export interface Blog {
  title: string;
  body: string;
  tags?: string;
  author: number;
  coverImage: string;
  thumbNail?: string;
  permaLink: string;
  timeRequired?: number;
  datePublished?: Date;
  dateLastModified?: Date;
  dateCreated: Date;
  draft: boolean;
  slug: string;
}

@ObjectType()
@Entity()
export default class MyBlog extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column('text')
  body: string;

  @Field()
  @Column('text')
  tags: string;

  @Field()
  @Column('int')
  author: number;

  @Field()
  @Column()
  coverImage: string;

  @Field()
  @Column()
  thumbNail: string;

  @Field()
  @Column()
  permaLink: string;

  @Field()
  @Column('int')
  timeRequired: number;

  @Field()
  @Column()
  datePublished: Date;

  @Field()
  @Column()
  dateLastModified: Date;

  @Field()
  @Column()
  dateCreated: Date;

  @Field()
  @Column()
  draft: boolean;

  @Field()
  @Column({unique: true})
  slug: string;
}
