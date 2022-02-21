import React, { useEffect } from "react";
import get from "lodash.get";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faBuilding,
  faFileCode,
  faCode,
  IconDefinition,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/_Layout/Layout";
import * as actions from "../store/resume/actions";
import { ResumeState } from "../store/resume/reducers";
import Hl from "../components/util/Hl";
import IsLoading from "../components/util/IsLoading";

interface AwesomeProps {
  icon: IconDefinition;
  text: string;
}

const AwesomeIconInfo = ({ icon, text }: AwesomeProps) => (
  <React.Fragment>
    <div className="main-container">
      <div className="awesome-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="label">{text}</span>
    </div>
    <style jsx>{`
      .main-container {
        display: flex;
        font-size: 17px;
        margin: 10px 0px 10px 0px;
      }
      .awesome-icon {
        width: 16px;
      }
      .label {
        line-height: 1;
        margin-left: 10px;
      }
    `}</style>
  </React.Fragment>
);

const calculateDiffDates = (startDate) => {
  var ageDifMs = Date.now() - startDate;
  var timeDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(timeDate.getUTCFullYear() - 1970);
};

interface Props {
  getResume: () => void;
  resume: ResumeState;
}

const ResumePage = ({ getResume, resume }: Props) => {
  const startDate = get(resume, "personal.expStartDate", Date.now());
  const START_WORK = new Date(startDate);
  const yearsExp = calculateDiffDates(START_WORK);
  useEffect(() => {
    getResume();
  }, []);

  return (
    <Layout title="Resume">
      <IsLoading isLoading={resume.isLoading}>
        <div className="resume-page-container">
          <div className="resume-meta">
            <div className="resume-img-container">
              <img
                src="/static/images/myPicture.jpg"
                className="resume-img"
                alt="my photo"
              />
              <div className="resume-btn-container">
                <a
                  className="resume-btn"
                  href="https://www.canva.com/design/DAEqUrSoKCQ/NxWHW6VzzWHPDDl_vcwKAw/view?utm_content=DAEqUrSoKCQ&utm_campaign=designshare&utm_medium=link2&utm_source=homepage_design_menu"
                  target="blank"
                >
                  Resume
                </a>
                <a
                  className="resume-download-btn"
                  href="/static/docs/alex-wilkinson-resume.pdf"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>
            </div>
            <div className="resume-quick-info">
              <AwesomeIconInfo icon={faMapPin} text={resume.location.current} />
              <AwesomeIconInfo
                icon={faBuilding}
                text={`${yearsExp}+ Years Experience`}
              />
              <AwesomeIconInfo
                icon={faFileCode}
                text="JavaScript, C#, Java, Rust"
              />
              <AwesomeIconInfo
                icon={faCode}
                text="React JS, Angular .NET Core"
              />
            </div>
          </div>
          <div className="resume-main">
            <h3 className="animated bounceInDown">
              Hi I'm <Hl>Alex</Hl> I've been working as a developer since{" "}
              <Hl>2016</Hl> and I have covered many interesting technologies
              such as <Hl>React</Hl>, Angular, VueJS, Python, <Hl>C#</Hl>, Rust
              both in work and during my free time. I enjoy learning and reading
              up on new exciting technologies and making even more awesome
              applications.
            </h3>
            <h3 className="animated bounceInUp">
              <span className="project-header">
                <Hl>Some Projects:</Hl>
              </span>
              <br />
              <Hl>Intelligent Contract Platform</Hl> Working in a more full
              stack capacity at{" "}
              <a href="https://chinsay.com" target="_blank">
                Chinsay
              </a>{" "}
              Working largely with <Hl>.Net Core 3.1</Hl> in a more full stack
              capacity creating RESTful APIs and more <Hl>SQL</Hl> work. One of
              the bigger areas I am working on is to upgrade the frontend from
              KnockoutJS to something a bit more modern.
              <br />
              <br />
              <Hl>Video Streaming</Hl> Working on the frontend site at{" "}
              <a href="https://hooq.tv" target="_blank">
                HOOQ
              </a>{" "}
              using <Hl>ReactJS</Hl> and Redux along with working with{" "}
              <Hl>VideoJS</Hl> and using <Hl>Koa</Hl> for the backend.
              Authentication is handled with JWT 2.0 along with Cookies.
              <span className="project-break" />
              <br />
              <br />
              <Hl>RESTful API</Hl> on a Microsoft stack written in{" "}
              <Hl>ASP.NET Core 2</Hl> using JWTs for security talking to a
              Angular and VueJS frontend with full CRUD functionality along with
              intergration into other platform APIs to deliver extra
              functaionality such as emails, sms authentication and QRCodes.
              <br />
              <br />
              <Hl>Electron App</Hl> with React and Redux to create a new app to
              help educators have an easier job. This a project I am doing in my
              free time and covers a lot of interesting technologies and keeps
              providing me with great learning experiences
            </h3>
          </div>
        </div>
        <style jsx>{`
          a {
            color: #526d87;
            text-decoration: none;
          }
          a:hover {
            color: #4196ea;
          }
          .resume-page-container {
            display: flex;
            width: 80%;
            margin: auto;
          }
          .resume-meta {
            margin-right: 20px;
            margin-top: 20px;
          }
          .resume-img-container {
            width: 200px;
            box-sizing: border-box;
            position: relative;
            height: 250px;
          }
          .resume-img-container .resume-img {
            height: 200px;
            width: 100%;
          }
          .resume-img-container .resume-btn-container {
            display: flex;
            flex-direction: row;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
          }

          .resume-img-container .resume-btn-container .resume-download-btn {
            display: flex;
            width: 22%;
            padding: 0 5px;
            flex-grow: 0;
            border: 1px solid #4e6096;
            border-left: 0;
            background-color: #d8d8d8;
          }

          .resume-img-container .resume-btn-container .resume-btn {
            width: 100%;
            box-sizing: border-box;
            background-color: #4196ea;
            border: 1px solid #4e6096;
            display: flex;
            flex-grow: 1;
            justify-content: center;
            cursor: pointer;
            color: #ffffff;
            font-family: Arial;
            font-size: 20px;
            padding: 10px 20px;
            text-decoration: none;
            text-align: center;
            text-shadow: -1px 1px 2px #283966;
          }
          .resume-img-container .resume-btn-container .resume-btn:hover {
            width: 100%;
            background-color: #3e454f;
            color: #ffffff;
          }
          .resume-main {
            flex-grow: 1;
          }

          @media only screen and (max-width: 600px) {
            .resume-page-container {
              flex-direction: row;
              flex-wrap: wrap;
              width: 100%;
            }
            .resume-meta {
              margin: auto;
            }
          }
        `}</style>
      </IsLoading>
    </Layout>
  );
};

const mapStateToProps = ({ resume }: any) => ({
  resume: resume,
});

const mapDispatchToProps = (dispatch: any) => ({
  getResume: (): any => dispatch(actions.fetchResume()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResumePage);
