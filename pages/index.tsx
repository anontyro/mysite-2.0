import * as React from 'react';
import {connect} from 'react-redux';
import Layout from '../components/_Layout/Layout';
import * as actions from '../store/blog/actions';
import {Blog} from '../server/entity/MyBlog';
import {UserState} from '../store/user/reducers';
import Header from '../components/_Layout/Header';
import Hl from '../components/util/Hl';

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
      <Layout displayImg showFooter>
        <h1>
          Hi! I'm <Hl>Alex</Hl> a full stack developer with some design flair
        </h1>
        <h3>
          Located in <Hl>Singapore</Hl> I have experience with everything from
          Android development to SCSS. I started in a more backend role with
          Java but now work full stack with Asp.Net Core & Angular. I'm
          currently really exploring the JavaScript everywhere paradigm
          exploring NodeJs, Electron & VueJS.
        </h3>
        <style jsx>{`
          h1 {
            width: 40%;
          }
          h3 {
            width: 50%;
          }
          @media only screen and (max-width: 900px) {
            h1,
            h3 {
              width: 100%;
            }
          }
        `}</style>
      </Layout>
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
