import React from 'react';
import {withRouter, SingletonRouter} from 'next/router';
import {connect} from 'react-redux';

interface Props {}

const Loader = ({}: Props) => {
  return (
    <React.Fragment>
      <h1>Loading...</h1>
    </React.Fragment>
  );
};

export default Loader;
