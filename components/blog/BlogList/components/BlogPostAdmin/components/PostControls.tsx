import React from 'react';
import {Blog} from '../../../../../../server/entity/MyBlog';
import DefaultLink from '../../../../../common/buttons/DefaultLink';

const PublishBtn = ({post}: {post: Blog}) =>
  post.draft ? (
    <DefaultLink link={`/blog?post=${post.slug}`} label={'Publish'} />
  ) : null;

interface Props {
  post: Blog;
}

const PostControls = ({post}: Props) => (
  <React.Fragment>
    <div className={'postControls'}>
      <DefaultLink link={`/blog?post=${post.slug}`} label={'Edit'} />
      <PublishBtn post={post} />
    </div>
    <style jsx>{`
      .postControls {
        display: flex;
        justify-content: flex-end;
      }
    `}</style>
  </React.Fragment>
);

export default PostControls;
