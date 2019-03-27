import React from 'react';
import {connect} from 'react-redux';
import Layout from '../components/_Layout/Layout';

interface Props {}

const ResumePage = ({}: Props) => {
  return (
    <Layout title="Resume">
      <React.Fragment>
        <h1>Resume page</h1>
      </React.Fragment>
    </Layout>
  );
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumePage);
