import * as React from 'react';
import Layout from '../components/_Layout/Layout';
import Hl from '../components/util/Hl';
import {NavLink} from '../components/_Layout/navbar/Navbar';
import {ROUTES} from '../data/consts';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About">
    <h1>
      <Hl>About</Hl>
    </h1>
    <h3 className="animated slideInLeft">
      <Hl>Me</Hl> I seriously got into the idea of programming in 2015 self
      teaching myself <Hl>Java</Hl> initally. I decided to later formalise my
      learning by completing a post-grad course from Manchester University (UK)
      Introduction to software Development in <Hl>Java</Hl>. Next I worked with
      Android, Python and C# before moving more into the realm of{' '}
      <Hl>JavaScript</Hl> Working with Angular JS before moving into Angular 2
      and TypeScript. Now I spend most of my time with full stack on a Microsoft
      stack using
      <Hl>.Net Core</Hl> and helping migrate the frontend to something more
      modern. In my free time I am spending most of my time with{' '}
      <Hl>Electron</Hl> and <Hl>Rust</Hl>.
    </h3>
    <h3 className="animated slideInRight">
      <Hl>Work</Hl> I am currently working in <Hl>Singapore</Hl> I am front end
      focused with and emphasise on useability, although I am working more
      across the stack in a more end to end ability this time around giving me
      wider exposure to <Hl>C#</Hl> work with APIs along with much more hands on
      with <Hl>SQL</Hl> allowing me to better understand the impact of front end
      changes to the system.
    </h3>
    <h3 className="animated slideInLeft">
      <NavLink
        link={`${ROUTES.BLOG}?post=my-new-site-stack`}
        label={'The Site Stack'}
      />
      I have moved from my previous Django site which worked although basic and
      quite messy to a new design. Now I am using <Hl>NextJS</Hl> for the
      frontend to provide a modern reactive style. All my API calls are done via
      Apollo <Hl>GraphQL</Hl> which has helped me streamline everything. My site
      is containerised using <Hl>Docker</Hl> to provide more control over the
      deployment and I am working on continuous delivery to provide rapid site
      updates. I am hosting everything on <Hl>Digital Ocean</Hl> on a Ubuntu
      server.
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
