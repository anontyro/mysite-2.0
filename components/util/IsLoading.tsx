import React, {ReactNode} from 'react';
import Loader from '../Loader';

interface Props {
  isLoading: boolean;
  children: ReactNode;
}

const IsLoading = ({isLoading = false, children}: Props) => {
  if (isLoading) {
    return (
      <React.Fragment>
        <Loader />
      </React.Fragment>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default IsLoading;
