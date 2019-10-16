import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Layout from '../components/_Layout/Layout';
import * as portfolioActions from '../store/portfolio/actions';
import Hl from '../components/util/Hl';
import {AppState} from '../store';
import {GithubPortfolio, Talk} from '../store/portfolio/reducers';
import IsLoading from '../components/util/IsLoading';
import PortfolioList from '../components/portfolio/PortfolioList';
import MyTalksList from '../components/portfolio/Talks';

const TITLE = 'Portfolio';

interface Props {
  getPortfolioList: (refresh?) => void;
  portfolioList: GithubPortfolio[];
  talksList: Talk[];
  fetching: boolean;
}

const PortfolioPage = ({
  getPortfolioList,
  portfolioList,
  fetching,
  talksList,
}: Props) => {
  useEffect(() => {
    getPortfolioList();
    return () => {};
  }, []);
  return (
    <React.Fragment>
      <Layout title={TITLE}>
        <h1 className="header">
          <Hl>Portfolio</Hl>
        </h1>
        <h3 className="portfolio-body animated slideInRight">
          This page is currently being used to showcase my top <Hl>GitHub</Hl>{' '}
          projects. This should provide a good <Hl>cross section</Hl> of
          different projets I am currently working on.
        </h3>
        <div className="portfolio-content">
          <IsLoading isLoading={fetching}>
            <PortfolioList portfolioList={portfolioList} />
            <MyTalksList myTalks={talksList} />
          </IsLoading>
        </div>
      </Layout>
      <style jsx>
        {`
          .header,
          .portfolio-body {
            margin: 5px 0 10px 0;
          }
          .portfolio-content {
            margin-bottom: 25px;
          }
        `}
      </style>
    </React.Fragment>
  );
};

const mapStateToProps = ({portfolio}: AppState) => ({
  portfolioList: portfolio.portfolioList,
  talksList: portfolio.myTalks,
  fetching: portfolio.fetching,
});

const mapDispatchToProps = (dispatch: any) => ({
  getPortfolioList: (refresh: boolean = false) =>
    dispatch(portfolioActions.fetchPortfolioList(refresh)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioPage);
