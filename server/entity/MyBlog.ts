import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';
import {ObjectType, Field, ID} from 'type-graphql';

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
