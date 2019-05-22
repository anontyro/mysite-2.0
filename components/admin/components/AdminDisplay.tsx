import * as React from 'react';
import {ADMIN_SECTIONS} from '../../../data/consts';
import AdminBlog from '../Blog';
import AdminAccount from '../User';
import AdminHome from '../Home';
import BlogEdit from '../Blog/BlogEdit';

interface AdminProps {
  section?: string | string[];
}

const AdminDisplay = ({section = 'home'}: AdminProps) => {
  switch (section) {
    case ADMIN_SECTIONS.BLOG_HOME:
    case ADMIN_SECTIONS.BLOG_ADD:
      return <AdminBlog />;
    case ADMIN_SECTIONS.BLOG_EDIT:
      return <BlogEdit />;
    case ADMIN_SECTIONS.USER:
      return <AdminAccount />;
    default:
      return <AdminHome />;
  }
};

export default AdminDisplay;
