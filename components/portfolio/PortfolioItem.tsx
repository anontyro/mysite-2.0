import React from 'react';
import {GithubPortfolio} from '../../store/portfolio/reducers';
import Hl from '../util/Hl';

interface Props {
  repo: GithubPortfolio;
}

const onRedirect = (url: string) => {
  window.open(url, '_blank');
};

const PortfolioItem = ({repo}: Props) => (
  <React.Fragment>
    <div className="repoContainer" onClick={() => onRedirect(repo.url)}>
      <div className="header">
        <Hl>{repo.name}</Hl>
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{__html: repo.descriptionHTML}}
      />
      <div className="mainLanguage">{repo.primaryLanguage.name}</div>
    </div>
    <style jsx>{`
      .repoContainer {
        width: 45%;
        height: 100px;
        margin: 10px;
        padding: 10px;
        box-shadow: 3px 3px 22px -10px black;
        position: relative;
        cursor: pointer;
      }
      .repoContainer:hover {
        box-shadow: -3px -3px 22px -10px black;
      }
      .header {
        font-size: 1rem;
      }
      .mainLanguage {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: ${repo.primaryLanguage.color};
      }
      @media only screen and (max-width: 800px) {
        .repoContainer {
          width: 90%;
          height: 140px;
        }
        .header,
        .mainLanguage,
        .description {
          font-size: 1.2rem;
        }
      }
      @media only screen and (max-width: 500px) {
        .repoContainer {
          height: 200px;
        }
      }
    `}</style>
  </React.Fragment>
);

export default PortfolioItem;
