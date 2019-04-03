import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Layout from '../components/_Layout/Layout';
import * as actions from '../store/resume/actions';
import {ResumeState} from '../store/resume/reducers';
import IsLoading from '../components/util/IsLoading';

interface Props {
  getResume: () => void;
  resume: ResumeState;
}

const ResumePage = ({getResume, resume}: Props) => {
  useEffect(() => {
    getResume();
  }, []);

  return (
    <Layout title="Resume">
      <IsLoading isLoading={resume.isLoading}>
        <React.Fragment>
          <h1>Resume page</h1>
        </React.Fragment>
      </IsLoading>
    </Layout>
  );
};

const mapStateToProps = ({resume}: any) => ({
  resume: resume,
});

const mapDispatchToProps = (dispatch: any) => ({
  getResume: (): any => dispatch(actions.fetchResume()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumePage);
