import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter, SingletonRouter} from 'next/router';

interface Props {
  router: SingletonRouter;
}

const BlogEdit = ({router}: Props) => {
  let Quill = null;
  if (document) {
    Quill = require('react-quill');
  }
  const [text, setText] = useState('');

  useEffect(() => {}, []);

  const onTextChange = value => {
    setText(value);
  };
  const {slug} = router.query;

  if (!Quill) {
    return null;
  }
  return (
    <React.Fragment>
      {slug}
      <Quill value={text} onChange={onTextChange} />
    </React.Fragment>
  );
};

const mapStateToProps = ({user}: any) => ({
  userSession: user,
});

const mapDispatchToProps = (dispatch: any): any => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogEdit)
);
