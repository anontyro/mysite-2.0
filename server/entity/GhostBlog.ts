import {ObjectType, Field} from 'type-graphql';

export interface IGhostPost {
  id: string;
  uuid?: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string;
  featured: boolean;
  page: boolean;
  meta_title?: string;
  meta_description?: string;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  custom_excerpt: string;
  codeinjection_head?: string;
  codeinjection_foot?: string;
  og_image?: string;
  og_title?: string;
  og_description?: string;
  twitter_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  custom_template?: string;
  canonical_url?: string;
  primary_author?: string;
  primary_tag?: string;
  url?: string;
  excerpt?: string;
}

export interface IGhostBlogMeta {
  pagination: {
    page?: number;
    limits?: number;
    pages?: number;
    total?: number;
    next?: number;
    prev?: number;
  };
}

export interface IGhostBlog {
  posts: IGhostPost[];
  meta: IGhostBlogMeta;
}

@ObjectType()
class GhostPost {
  @Field({nullable: true})
  id: string;

  @Field({nullable: true})
  title: string;

  @Field({nullable: true})
  slug: string;

  @Field({nullable: true})
  html: string;

  @Field({nullable: true})
  comment_id: string;

  @Field({nullable: true})
  feature_image: string;

  @Field({nullable: true})
  featured: boolean;

  @Field({nullable: true})
  page: boolean;

  @Field({nullable: true})
  meta_title: string;

  @Field({nullable: true})
  meta_description: string;

  @Field({nullable: true})
  created_at: Date;

  @Field({nullable: true})
  updated_at: Date;

  @Field({nullable: true})
  published_at: Date;

  @Field({nullable: true})
  custom_excerpt: string;

  @Field({nullable: true})
  codeinjection_head: string;

  @Field({nullable: true})
  codeinjection_foot: string;

  @Field({nullable: true})
  og_image: string;

  @Field({nullable: true})
  og_title: string;

  @Field({nullable: true})
  og_description: string;

  @Field({nullable: true})
  twitter_image: string;

  @Field({nullable: true})
  twitter_title: string;

  @Field({nullable: true})
  twitter_description: string;

  @Field({nullable: true})
  custom_template: string;

  @Field({nullable: true})
  canonical_url: string;

  @Field({nullable: true})
  primary_author: string;

  @Field({nullable: true})
  primary_tag: string;

  @Field({nullable: true})
  url: string;

  @Field({nullable: true})
  excerpt: string;
}

@ObjectType()
class GhostBlogMetaPagination {
  @Field({nullable: true})
  page: number;

  @Field({nullable: true})
  limit: number;

  @Field({nullable: true})
  pages: number;

  @Field({nullable: true})
  total: number;

  @Field({nullable: true})
  next: number;

  @Field({nullable: true})
  prev: number;
}

@ObjectType()
class GhostBlogMeta {
  @Field(() => GhostBlogMetaPagination, {nullable: true})
  pagination: GhostBlogMetaPagination;
}

@ObjectType()
export default class GhostBlog {
  @Field(() => [GhostPost], {nullable: true})
  posts: [GhostPost];

  @Field(() => GhostBlogMeta, {nullable: true})
  meta: GhostBlogMeta;
}
