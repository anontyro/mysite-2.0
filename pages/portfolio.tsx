import React from 'react';
import {connect} from 'react-redux';
import Layout from '../components/_Layout/Layout';
import * as portfolioActions from '../store/portfolio/actions';

interface Props {
  getPortfolioList: (refresh?) => void;
}

const PortfolioPage = ({getPortfolioList}: Props) => {
  getPortfolioList();
  return (
    <Layout title="Portfolio">
      <React.Fragment>
        <h1>Portfolio page</h1>
      </React.Fragment>
    </Layout>
  );
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  getPortfolioList: (refresh: boolean = false) =>
    dispatch(portfolioActions.fetchPortfolioList(refresh)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioPage);
