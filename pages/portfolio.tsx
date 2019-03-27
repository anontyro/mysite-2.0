import React from 'react';
import {connect} from 'react-redux';
import Layout from '../components/_Layout/Layout';

interface Props {}

const PortfolioPage = ({}: Props) => {
  return (
    <Layout title="Portfolio">
      <React.Fragment>
        <h1>Portfolio page</h1>
      </React.Fragment>
    </Layout>
  );
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioPage);
