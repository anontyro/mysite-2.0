import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';
import {ObjectType, Field, ID} from 'type-graphql';

export interface Blog {
  id?: number;
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

  @Field({nullable: true})
  @Column('text', {nullable: true})
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

  @Field({nullable: true})
  @Column('int', {nullable: true})
  timeRequired: number;

  @Field({nullable: true})
  @Column({nullable: true})
  datePublished: Date;

  @Field({nullable: true})
  @Column({nullable: true})
  dateLastModified: Date;

  @Field()
  @Column()
  dateCreated: Date;

  @Field()
  @Column({default: true})
  draft: boolean;

  @Field()
  @Column({unique: true})
  slug: string;
}
