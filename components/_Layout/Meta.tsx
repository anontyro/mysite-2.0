import * as React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  displayImg?: boolean;
};

const bgColor = "rgb(41, 41, 41)";

const bgImage = `
background-image: url(/static/images/background/my-main-bg.jpg);
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
`;

const Meta: React.FunctionComponent<Props> = ({
  title = "alexwilkinson.co",
  displayImg = false
}) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Pacifico"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      html {
        height: 100%;
        width: 100%;
      },
    `}</style>
    <style jsx global>{`
      body {
        background-color: ${bgColor};
        color: lightslategrey;
        ${displayImg ? bgImage : null}
      },
     
    `}</style>
  </React.Fragment>
);

export default Meta;
