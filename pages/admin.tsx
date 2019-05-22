import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter, SingletonRouter} from 'next/router';
import Layout from '../components/_Layout/Layout';
import {UserState} from '../store/user/reducers';
import AdminHeader from '../components/admin/components/AdminHeader';
import AdminDisplay from '../components/admin/components/AdminDisplay';
import WhenNotLoggedIn from '../components/util/whenNoLoggedIn';

interface Props {
  userSession: UserState;
  router: SingletonRouter;
}

const TITLE = 'Admin';

const AdminPage = ({userSession, router}: Props) => {
  const {section} = router.query;

  return (
    <Layout showNavBar={false} title={TITLE}>
      <WhenNotLoggedIn>
        <AdminHeader section={section} />
        <AdminDisplay section={section} />
      </WhenNotLoggedIn>
    </Layout>
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
  )(AdminPage)
);
