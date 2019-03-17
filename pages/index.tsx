import * as React from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import {Dispatch} from 'redux';
import graphQLQuery, {graphQLFetch} from '../components/graphQL/GraphQLWrapper';
import {BLOG_LIST_QUERY} from '../graphQL/queries/blogQuery';
import * as actions from '../store/blog/actions';
import {Blog} from '../server/entity/MyBlog';
import {UserState} from '../store/user/reducers';

interface Props {
  getBlogList: (token?) => void;
  blogList: Blog[];
  fetching: boolean;
  userSession: UserState;
}

interface State {}

export class IndexPage extends React.Component<Props, State> {
  componentDidMount() {
    console.log('component mounted');
    const {token} = this.props.userSession;
    this.props.getBlogList(token);
  }

  public render() {
    return (
      <React.Fragment>
        <h1>Index</h1>
        {this.props.fetching ? (
          <p>LOADING...</p>
        ) : (
          <p>
            FINISHED{' '}
            {this.props.blogList[0] ? this.props.blogList[0].title : null}
          </p>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({blog, user}: any) => ({
  userSession: user,
  blogList: blog.blogList,
  fetching: blog.fetching,
});

const mapDispatchToProps = (dispatch: any): any => ({
  getBlogList: (token): any => dispatch(actions.fetchBlogList(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
