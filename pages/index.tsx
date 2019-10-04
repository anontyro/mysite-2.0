import * as React from 'react';
import {connect} from 'react-redux';
import Layout from '../components/_Layout/Layout';
import * as blogActions from '../store/blog/actions';
import * as portfolioActions from '../store/portfolio/actions';

import {Blog} from '../server/entity/MyBlog';
import {UserState} from '../store/user/reducers';
import Hl from '../components/util/Hl';

interface Props {
  getBlogList: (token?) => void;
  getPortfolioList: (refresh?) => void;
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
    this.props.getPortfolioList();
  }

  public render() {
    return (
      <Layout displayImg showFooter>
        <div className="home-body">
          <h1>
            Hi! I'm <Hl>Alex</Hl> a full stack developer with some design flair
          </h1>
          <h3>
            Located in <Hl>Singapore</Hl> I have experience with everything from
            Android development to SCSS. I started in a more backend role with
            Java and C# but now work more frontend largely with{' '}
            <Hl>React JS </Hl> working with media streaming. I still enjoy
            playing with other technologies like <Hl>Rust</Hl> and{' '}
            <Hl>GraphQL </Hl>
            and learning new and better ways to write code.
          </h3>
        </div>
        <style jsx>{`
          .home-body {
            margin-top: 100px;
          }
          h1 {
            width: 60%;
          }
          h3 {
            width: 45%;
          }

          @media only screen and (max-width: 1200px) {
            h1 {
              width: 75%;
            }
            h3 {
              width: 50%;
            }
          }

          @media only screen and (max-width: 600px) {
            h1,
            h3 {
              width: 100%;
            }
            .home-body {
              margin-top: unset;
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
  getBlogList: (token): any => dispatch(blogActions.fetchBlogList(token)),
  getPortfolioList: (refresh: boolean = false) =>
    dispatch(portfolioActions.fetchPortfolioList(refresh)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
