import * as React from "react";
import Layout from "../components/_Layout/Layout";
import Hl from "../components/util/Hl";
import { NavLink } from "../components/_Layout/navbar/Navbar";
import { ROUTES } from "../data/consts";

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
      Android, Python and C# before moving more into the realm of{" "}
      <Hl>JavaScript</Hl> Working with Angular JS before moving into Angular 2
      and TypeScript. Now I spend most of my time with full stack on a Microsoft
      stack using
      <Hl>.Net Core</Hl> and helping migrate the frontend to something more
      modern.
      <br />
      <br />I have a strong understanding across the stack and technologies
      used, although I would say I am at heart a{" "}
      <Hl>Frontend focused JavaScript Developer</Hl> who enjoys pushing myself
      to improve and learn new areas.
    </h3>
    <h3 className="animated slideInRight">
      <Hl>Work</Hl> I am currently working in <Hl>The United Kingdom</Hl> I am
      front end focused with and emphasise on useability, I am once again
      working much more on the frontend working back with <Hl>React</Hl> again,
      but also with additional work on the backend side aswell contributing to{" "}
      <Hl>NestJs</Hl> services.
      <br />
      <br />I am currently working as a <Hl>Senior Engineer</Hl> which has
      provided me with a lot of new and interesting challenges in an industry,
      travel, that is close to my hearrt. Along with an awesome manager who
      continues to push me and help me grow.
    </h3>
    <h3 className="animated slideInLeft">
      <NavLink
        link={`${ROUTES.BLOG}?post=my-new-site-stack`}
        label={"The Site Stack"}
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
