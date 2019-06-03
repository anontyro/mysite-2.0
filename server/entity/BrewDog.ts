import {ObjectType, Field, InputType} from 'type-graphql';

export interface IBrewDog {
  id: number;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
}

@ObjectType()
@InputType('BeerInput')
export class BeerArgs {
  @Field({nullable: true})
  food: string;
}

@ObjectType()
export default class BrewDog {
  @Field({nullable: true})
  id: number;

  @Field({nullable: true})
  name: string;

  @Field({nullable: true})
  tagline: string;

  @Field({nullable: true})
  first_brewed: string;

  @Field({nullable: true})
  description: string;

  @Field({nullable: true})
  image_url: string;

  @Field({nullable: true})
  abv: number;

  @Field({nullable: true})
  ibu: number;

  @Field({nullable: true})
  target_fg: number;

  @Field({nullable: true})
  target_og: number;

  @Field({nullable: true})
  ebc: number;

  @Field({nullable: true})
  srm: number;

  @Field({nullable: true})
  ph: number;

  @Field({nullable: true})
  attenuation_level: number;

  @Field(() => [String], {nullable: true})
  food_pairing: [String];
}
