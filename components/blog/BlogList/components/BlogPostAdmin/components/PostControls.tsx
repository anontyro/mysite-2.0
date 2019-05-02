import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../../../store/blog/actions';
import {Blog} from '../../../../../../server/entity/MyBlog';
import DefaultLink from '../../../../../common/buttons/DefaultLink';
import {UserState} from '../../../../../../store/user/reducers';
import {BlogState} from '../../../../../../store/blog/reducers';

interface MapState {
  user: UserState;
  blog: BlogState;
}

const PublishBtn = ({
  post,
  token,
  releasePost,
}: {
  post: Blog;
  token: string;
  releasePost: any;
}) =>
  post.draft ? (
    <DefaultLink
      link={`#`}
      onClick={(event: any) => {
        event.preventDefault();
        releasePost(token, parseInt(post.id.toString()));
      }}
      label={'Publish'}
    />
  ) : null;

interface Props {
  post: Blog;
  userSession: UserState;
  releasePost: (token: string, id: number) => any;
}

const PostControls = ({post, userSession, releasePost}: Props) => (
  <React.Fragment>
    <div className={'postControls'}>
      <DefaultLink link={`/blog?post=${post.slug}`} label={'Edit'} />
      <PublishBtn
        post={post}
        token={userSession.token}
        releasePost={releasePost}
      />
    </div>
    <style jsx>{`
      .postControls {
        display: flex;
        justify-content: flex-end;
      }
    `}</style>
  </React.Fragment>
);

const mapStateToProps = ({user, blog}: MapState) => ({
  userSession: user,
});

const mapDispatchToProps = (dispatch: any): any => ({
  releasePost: (token: string, id: number): any =>
    dispatch(actions.releaseBlogPost(token, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostControls);
