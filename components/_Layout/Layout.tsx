import React, { useEffect } from "react";
import Header from "./Header";
import dynamic from "next/dynamic";
import { initGA, logPageView } from "../../utils/analytics";

const Footer = dynamic((() => import("./Footer")) as any, {
  ssr: false,
});

type Props = {
  title?: string;
  displayImg?: boolean;
  showFooter?: boolean;
  showNavBar?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  title,
  displayImg = false,
  children,
  showFooter = true,
  showNavBar = true,
}) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <React.Fragment>
      <div className={"pageContainer"}>
        <Header showNavBar={showNavBar} title={title} displayImg={displayImg} />
        {children}
      </div>
      <style jsx>{`
        .pageContainer {
          flex: 1 0 auto;
          min-height: calc(100vh - 130px);
          overflow-x: hidden;
        }
      `}</style>
      {showFooter && <Footer />}
    </React.Fragment>
  );
};

export default Layout;
