import React from 'react';
import {GithubPortfolio} from '../../../store/portfolio/reducers';
import PortfolioItem from '../PortfolioItem';

interface MapProps {
  portfolioList: GithubPortfolio[];
}

const PortfolioListMap = ({portfolioList}: MapProps) => (
  <React.Fragment>
    <div className="portfolioList">
      {portfolioList.map((repo: GithubPortfolio) => (
        <PortfolioItem repo={repo} key={repo.url} />
      ))}
    </div>
    <style jsx>
      {`
        .portfolioList {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        @media only screen and (max-width: 800px) {
          .portfolioList {
            justify-content: center;
          }
        }
        @media only screen and (max-width: 500px) {
        }
      `}
    </style>
  </React.Fragment>
);

interface Props {
  portfolioList: GithubPortfolio[];
}

const PortfolioList = ({portfolioList}: Props) => {
  return (
    <React.Fragment>
      <PortfolioListMap portfolioList={portfolioList} />
    </React.Fragment>
  );
};

export default PortfolioList;
