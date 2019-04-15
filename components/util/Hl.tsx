import * as React from 'react';
import {secondaryBlueColor} from '../../data/typo';

interface Props {
  children: React.ReactNode;
}

/**
 * Highlighter component that will apply the secondary blue
 * color to any text enclosed
 * @param {children} ReactNode for any passed in child component
 */
const Hl = ({children}: Props) => (
  <React.Fragment>
    <span>{children}</span>
    <style jsx>{`
      span {
        color: ${secondaryBlueColor};
      }
    `}</style>
  </React.Fragment>
);

export default Hl;
