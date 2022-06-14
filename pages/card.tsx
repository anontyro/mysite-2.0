import * as React from "react";
import Layout from "../components/_Layout/Layout";
import Hl from "../components/util/Hl";
import { brandDesign } from "../data/typo";
import SocialLinks from "../components/_Layout/navbar/SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const CardPage: React.FunctionComponent = () => {
  const [isCardFront, setIsCardFront] = React.useState<boolean>(true);

  const handleRotate = () => {
    const innerEle =
      document.querySelector<HTMLElement>(".b-card-inner") ?? new HTMLElement();
    innerEle.style.transform = `rotateY(${isCardFront ? "180" : "360"}deg)`;
    setIsCardFront(!isCardFront);
  };

  return (
    <Layout title="Business Card" showFooter={false} showNavBar={false}>
      <h1>
        <Hl>Business Card</Hl>
      </h1>
      <div className="card-content-container">
        <div className="b-card">
          <div className="b-card-inner">
            <div className="b-card-front">
              <img
                src="/static/images/myPicture.jpg"
                className="resume-img"
                alt="my photo"
              />
              <div className="front-text">
                <div className="front-text-top">
                  <p className="brand">Alex Wilkinson</p>
                  <p className="p-text">Tech Lead at Chinsay</p>
                  <p className="p-text">Singapore</p>
                </div>
                <div className="front-text-bottom">
                  <p>
                    Experienced Frontend Developer with an eye for design and
                    full stack experience. Specalized in React and TypeScript
                    development, but experience also includes .Net Core and
                    Java.
                  </p>
                </div>
              </div>
            </div>
            <div className="b-card-back">
              <h2>Contact Info</h2>
              <div className="back-text">
                <div className="back-text-body">
                  <div className="my-email">
                    <div className="awesome-icon">
                      <FontAwesomeIcon icon={faAt} />
                    </div>
                    <span>alexwilkinson@gmail.com</span>
                  </div>
                </div>
                <div className="social-links">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-container-container" onClick={handleRotate}>
          <span className="flip-text">Flip</span>
        </div>
      </div>
      <style jsx>
        {`
          .flip-container-container {
            display: none;
          }
          .awesome-icon {
            font-size: 30px;
            width: 20px;
          }
          .brand {
            flex-grow: 0;
            padding-right: 15px;
            ${brandDesign}
            margin: 10px 0;
          }
          .card-content-container {
            position: relative;
            justify-content: center;
            display: flex;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          }
          .b-card {
            background-color: transparent;
            width: 500px;
            height: 250px;
            perspective: 1000px;
          }
          .b-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.8s;
            transform-style: preserve-3d;
          }
          .b-card:hover .b-card-inner {
            transform: rotateY(180deg);
          }
          .b-card-front,
          .b-card-back {
            position: absolute;
            border: 1px solid #bbb;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden; /* Safari */
            backface-visibility: hidden;
          }
          .b-card-front {
            background-color: rgb(77, 77, 77);
            border: 1px solid #bbb;
            color: white;
            display: flex;
            width: 100%;
            text-align: left;
          }
          .front-text {
            padding-left: 10px;
            display: flex;
            flex-direction: column;
          }
          .front-text-top > p.p-text {
            margin: 0;
          }
          .front-text-top {
            display: flex;
            flex-direction: column;
            flex-grow: 0;
            color: #a2a0a0;
          }

          .front-text-bottom {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }
          .b-card-front img {
            height: 100%;
          }
          .b-card-back {
            background-color: #1366b7;
            color: white;
            transform: rotateY(180deg);
          }
          .back-text {
            height: 70%;
            display: flex;
            flex-direction: column;
          }
          .back-text-body {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
          }
          .my-email {
            display: flex;
            align-items: center;
          }
          .my-email > span {
            margin-left: 5px;
          }
          @media only screen and (max-width: 600px) {
            .b-card {
              width: 90%;
              height: auto;
            }
            .b-card-front {
              flex-direction: column;
            }
            .b-card-front > img {
              height: 250px;
            }
            .card-content-container {
              height: 435px;
            }
            .flip-container-container {
              display: initial;
              position: absolute;
              top: 0;
              right: 15px;
              color: white;
              border-top: 60px solid #0e96f0;
              border-left: 60px solid transparent;
              cursor: pointer;
            }
            .flip-text {
              position: absolute;
              top: -55px;
              left: -25px;
              transform: rotate(45deg);
              font-size: 1rem;
            }
          }
        `}
      </style>
    </Layout>
  );
};
export default CardPage;
