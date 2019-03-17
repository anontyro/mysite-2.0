import * as React from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import {Dispatch} from 'redux';
import graphQLQuery, {graphQLFetch} from '../components/graphQL/GraphQLWrapper';
import {BLOG_LIST_QUERY} from '../graphQL/queries/blogQuery';
import * as actions from '../store/blog/actions';
import {Blog} from '../server/entity/MyBlog';

interface Props {
  getBlogList: () => void;
  blogList: Blog[];
  fetching: boolean;
}

interface State {}

export class IndexPage extends React.Component<Props, State> {
  componentDidMount() {
    console.log('component mounted');
    this.props.getBlogList();
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

const mapStateToProps = ({blog}: any) => ({
  blogList: blog.blogList,
  fetching: blog.fetching,
});

const mapDispatchToProps = (dispatch: any): any => ({
  getBlogList: (): any => dispatch(actions.fetchBlogList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
