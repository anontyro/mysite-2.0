import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';
import {ObjectType, Field, ID} from 'type-graphql';

@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  isActive: boolean;

  @Field()
  @Column({unique: true})
  email: string;

  @Column()
  password: string;
}
