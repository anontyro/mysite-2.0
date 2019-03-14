import * as React from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import {Dispatch} from 'redux';
import graphQLQuery, {graphQLFetch} from '../components/graphQL/GraphQLWrapper';
import {BLOG_LIST_QUERY, BGG_TEST} from '../graphQL/queries/blogQuery';
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
        {this.props.fetching ? <p>LOADING...</p> : <p>FINISHED</p>}
      </React.Fragment>
    );
  }
}

// const IndexPage: React.FunctionComponent = ({}) => {
//   // const blogData = graphQLQuery({
//   //   query: BLOG_LIST_QUERY,
//   //   variables: {jwtToken: ''},
//   // }).subscribe({
//   //   next: data => console.log(data),
//   //   error: error => console.log('An error occured', error),
//   //   complete: () => console.log('completed'),
//   // });

//   return (
//     <Layout title="Home | Next.js + TypeScript Example">
//       <h1>Hello Next.js 👋</h1>
//       <p>
//         <Link href="/about">
//           <a>About</a>
//         </Link>
//       </p>
//     </Layout>
//   );
// };

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
