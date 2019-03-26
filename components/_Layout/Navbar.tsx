import * as React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import { UserState } from "../../store/user/reducers";

type Props = {
  userSession: UserState;
};

const Layout: React.FunctionComponent<Props> = ({ userSession }) => (
  <React.Fragment>
    <header>
      <div className={"nav-main-right"}>
        <div className={"brand"}>Alex Wilkinson</div>
        <nav className={"nav-main"}>
          <Link href="/">
            <a className={"nav-link"}>Home</a>
          </Link>{" "}
          <Link href="/blog">
            <a className={"nav-link"}>Blog</a>
          </Link>{" "}
          <Link href="/about">
            <a className={"nav-link"}>About</a>
          </Link>{" "}
        </nav>
      </div>
      <nav className={`nav-right`}>
        <Link href="/login">
          {userSession.email.length > 0 ? (
            <a className={"nav-link"}>Logout</a>
          ) : (
            <a className={"nav-link"}>Login</a>
          )}
        </Link>
      </nav>
    </header>
    <style jsx>{`
      header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 50px 20px;
      }
      ,
      .brand {
        flex-grow: 0;
        padding-right: 15px;
        font-size: 30px;
        font-family: "Pacifico", cursive;
        line-height: 31px;
      }
      ,
      nav {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      ,
      .nav-main {
        flex-grow: 0;
        padding-top: 5px;
      }
      ,
      .nav-right {
      }
      ,
      .nav-link {
        color: #526d87;
        font-size: 22px;
        text-decoration: none;
        flex-grow: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      ,
      .nav-link:hover {
        color: #4196ea;
      }
    `}</style>
  </React.Fragment>
);

const mapStateToProps = ({ user }: any) => ({
  userSession: user
});

const mapDispatchToProps = (dispatch: any): any => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
