import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/_Layout/Layout';
import Hl from '../components/util/Hl';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About">
    <h1>
      <Hl>About</Hl>
    </h1>
    <h3>
      <Hl>Me</Hl> I seriously got into the idea of programming in 2015 self
      teaching myself <Hl>Java</Hl> initally. I decided to later formalise my
      learning by completing a post-grad course from Manchester University (UK)
      Introduction to software Development in <Hl>Java</Hl>. Next I worked with
      Android, Python and C# before moving more into the realm of{' '}
      <Hl>JavaScript</Hl> Working with Angular JS before moving into Angular 2
      and TypeScript. Now I spend most of my time with full stack JavaScript
      working with <Hl>NodeJS</Hl> and <Hl>React JS</Hl> along with
      experimenting with awesome technologies such as GraphQL, Lambdas, and{' '}
      <Hl>Rust</Hl>.
    </h3>
    <h3>
      <Hl>Work</Hl> I am currently working in <Hl>Singapore</Hl> as a front end
      developer, working with a lot of exciting technologies within{' '}
      <Hl>media streaming</Hl> which is a new challenge for me! Working with{' '}
      <Hl>React JS</Hl> on the frontend and largely <Hl>Node JS</Hl> Koa on the
      backend using JWT 2.0 and cookies for authentication and working with a
      range of service APIs. As we have been working in media streaming I have
      worked with <Hl>VideoJS</Hl> streaming via Brightcove.
    </h3>
    <h3>
      <Hl>The Site</Hl> I have moved from my previous Django site which worked
      although basic and quite messy to a new design. Now I am using{' '}
      <Hl>NextJS</Hl> for the frontend to provide a modern reactive style. All
      my API calls are done via Apollo <Hl>GraphQL</Hl> which has helped me
      streamline everything. My site is containerised using <Hl>Docker</Hl> to
      provide more control over the deployment and I am working on continuous
      delivery to provide rapid site updates. I am hosting everything on{' '}
      <Hl>Digital Ocean</Hl> on a Ubuntu server.
    </h3>
    <style jsx>{`
      h1 {
        width: 90%;
        margin: auto;
      }
      h3 {
        width: 75%;
        margin: 25px auto;
      }

      @media only screen and (max-width: 600px) {
        h1 {
          width: 100%;
        }
        h3 {
          width: 100%;
        }
      }
    `}</style>
  </Layout>
);

export default AboutPage;
