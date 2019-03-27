import * as React from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
  displayImg?: boolean;
};

const bgColor = 'rgb(41, 41, 41)';

const bgImage = `
background-image: url(/static/images/background/my-main-bg.jpg);
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
`;

const setTitle = (pageTitle: String | null): String => {
  const siteTitle = 'Alex Wilkinson';
  if (pageTitle) {
    return `${siteTitle} | ${pageTitle}`;
  }
  return siteTitle;
};

const Meta: React.FunctionComponent<Props> = ({title, displayImg = false}) => (
  <React.Fragment>
    <Head>
      <title>{setTitle(title)}</title>
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
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        color: #999a9c;
      }
    `}</style>
    <style jsx global>{`
      h1 {
        font-size: 36px;
        font-weight: 500;
      }
    `}</style>
    <style jsx global>{`
      h3 {
        font-size: 24px;
        font-weight: 500;
      }
    `}</style>
  </React.Fragment>
);

export default Meta;
