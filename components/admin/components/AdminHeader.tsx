import * as React from 'react';
import Logout from '../../common/buttons/Logout';

interface Props {
  section: string | string[];
}

const AdminHeader = ({section}: Props) => (
  <React.Fragment>
    <div className={'adminHeader'}>
      <h1>{`Admin Section: ${section}`}</h1>
      <Logout />
    </div>
    <style jsx>{`
      h1 {
        margin-top: 0;
      }
      .adminHeader {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}</style>
  </React.Fragment>
);

export default AdminHeader;
