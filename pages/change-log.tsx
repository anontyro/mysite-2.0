import React from 'react';
import ChangeLog from '../CHANGELOG.md';
import Layout from '../components/_Layout/Layout';

const TITLE = 'Change Log';

interface Props {}

const ChangeLogPage = ({}: Props) => {
  return (
    <Layout title={TITLE}>
      <ChangeLog />
    </Layout>
  );
};

export default ChangeLogPage;
