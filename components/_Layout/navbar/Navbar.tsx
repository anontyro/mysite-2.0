import * as React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { withRouter, SingletonRouter } from "next/router";
import { brandDesign } from "../../../data/typo";
import { PAGE_LAYERS, GHOST_BLOG_URL, ROUTES } from "../../../data/consts";
import BaseLink from "../../common/buttons/BaseLink";

interface NavLinkProps {
  link?: string;
  label: string;
  onClick?: () => void;
  style?: any;
  isSelected?: boolean;
}

export const NavLink = ({
  link,
  label,
  onClick = () => {},
  style = undefined,
  isSelected = false,
}: NavLinkProps) => (
  <BaseLink
    link={{ link, label, onClick }}
    style={style}
    isSelected={isSelected}
  />
);

const isSelected = (route: string, currentRoute: string) =>
  route === currentRoute;

interface Props {
  router: SingletonRouter;
}

const Layout: React.FunctionComponent<Props> = ({ router }) => {
  const page = router.route;
  return (
    <React.Fragment>
      <header>
        <div className="nav-container">
          <Link href={ROUTES.HOME}>
            <a className={"brand"}>Alex Wilkinson</a>
          </Link>
          <nav className={"nav-main full-shown"}>
            <NavLink
              isSelected={isSelected(ROUTES.BLOG, page)}
              onClick={() => (window.location.href = GHOST_BLOG_URL)}
              label={"Blog"}
            />
            <NavLink
              link={ROUTES.PORTFOLIO}
              label={"Portfolio"}
              isSelected={isSelected(ROUTES.PORTFOLIO, page)}
            />
            <NavLink
              link={ROUTES.RESUME}
              label={"Resume"}
              isSelected={isSelected(ROUTES.RESUME, page)}
            />
            <NavLink
              link={ROUTES.ABOUT}
              label={"About"}
              isSelected={isSelected(ROUTES.ABOUT, page)}
            />
          </nav>
        </div>
        <div className="nav-container-right">
          <div className="feedback-btn-container">
            <a href="https://forms.gle/SerQjoj3GaUTeVny6" target="blank">
              Feedback
            </a>
          </div>
        </div>
      </header>
      <style jsx>{`
        a {
          color: white;
          text-decoration: none;
        }

        header {
          display: flex;
          justify-content: space-between;
          margin: 25px 0;
        }
        .brand {
          flex-grow: 0;
          padding-right: 15px;
          ${brandDesign}
        }
        .brand:hover {
          color: #60b0ff;
        }
        nav {
          display: flex;
          justify-content: space-between;
          overflow-x: auto;
          overflow-y: hidden;
          margin-top: 5px;
        }
        .nav-container {
          display: flex;
          flex-direction: row;
          /* justify-content: space-between; */
          width: 100%;
        }
        .nav-main {
          flex-grow: 0;
        }
        .nav-container-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .nav-container-right .feedback-btn-container {
          position: initial;
          box-sizing: border-box;
          background-color: #4196ea;
          border: 1px solid #4e6096;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-flex: 1;
          -webkit-flex-grow: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          cursor: pointer;
          color: #ffffff;
          font-family: Arial;
          font-size: 12px;
          padding: 5px 10px;
          -webkit-text-decoration: none;
          text-decoration: none;
          text-align: center;
          text-shadow: -1px 1px 2px #283966;
        }
        .nav-container-right .feedback-btn-container:hover {
          background-color: #3e454f;
          color: #ffffff;
        }
        .mobile-menu {
          display: none;
          font-size: 30px;
          margin-right: 30px;
          z-index: ${PAGE_LAYERS.TOP_VIEW};
        }
        .mobile-menu:hover {
          color: #60b0ff;
          cursor: pointer;
        }

        @media only screen and (max-width: 600px) {
          nav {
            justify-content: unset;
          }
          .nav-container {
            flex-direction: column;
          }
          .nav-container-right {
            display: block;
          }
          .nav-container-right .feedback-btn-container {
            position: absolute;
            right: 10px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

const mapStateToProps = ({ user }: any) => ({
  userSession: user,
});

const mapDispatchToProps = (dispatch: any): any => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
