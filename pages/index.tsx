import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import graphQLQuery, {graphQLFetch} from '../components/graphQL/GraphQLWrapper';
import {BLOG_LIST_QUERY, BGG_TEST} from '../graphQL/queries/blogQuery';

const IndexPage: React.FunctionComponent = () => {
  const blogData = graphQLQuery({
    query: BLOG_LIST_QUERY,
    variables: {jwtToken: ''},
  }).subscribe({
    next: data => console.log(data),
    error: error => console.log('An error occured', error),
    complete: () => console.log('completed'),
  });

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
