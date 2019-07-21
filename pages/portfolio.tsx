import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Layout from '../components/_Layout/Layout';
import * as portfolioActions from '../store/portfolio/actions';
import Hl from '../components/util/Hl';
import {AppState} from '../store';
import {GithubPortfolio} from '../store/portfolio/reducers';
import IsLoading from '../components/util/IsLoading';
import PortfolioList from '../components/portfolio/PortfolioList';

const TITLE = 'Portfolio';

interface Props {
  getPortfolioList: (refresh?) => void;
  portfolioList: GithubPortfolio[];
  fetching: boolean;
}

const PortfolioPage = ({getPortfolioList, portfolioList, fetching}: Props) => {
  useEffect(() => {
    getPortfolioList();
    return () => {};
  }, []);
  return (
    <React.Fragment>
      <Layout title={TITLE}>
        <h1 className="header">Portfolio page</h1>
        <h3 className="portfolioBody">
          This page is currently being used to showcase my top <Hl>GitHub</Hl>{' '}
          projects. This should provide a good <Hl>cross section</Hl> of
          different projets I am currently working on.
        </h3>
        <IsLoading isLoading={fetching}>
          <PortfolioList portfolioList={portfolioList} />
        </IsLoading>
      </Layout>
      <style jsx>
        {`
          .header,
          .portfolioBody {
            margin: 5px 0;
          }
        `}
      </style>
    </React.Fragment>
  );
};

const mapStateToProps = ({portfolio}: AppState) => ({
  portfolioList: portfolio.portfolioList,
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
