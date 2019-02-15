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
  @Column('int')
  author: number;

  @Field()
  @Column('text')
  coverImage: string;

  @Field()
  @Column()
  publish: Date;

  @Field()
  @Column()
  lastModified: Date;

  @Field()
  @Column()
  date: Date;

  @Field()
  @Column()
  draft: boolean;

  @Field()
  @Column({unique: true})
  slug: string;
}
