/* eslint-disable no-unused-vars */
import calc from 'postcss-calc';
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${(({size}) => size === 'large' ? '8px' : '4px')};
  height: ${(({size}) => size === 'large' ? '24px' : (size === 'medium' ? '12px' : '8px'))};
  padding: ${(({size}) => size === 'large' ? '4px' : null)};
`;

const ProgressFill = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  width: ${({value}) => value + '%'};
  height: 100%;
`;

const BarWrapper = styled.div`
  overflow: hidden; 
  border-radius: 4px;
  width: 100%;
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <BarWrapper value={value}>
        <ProgressFill size={size} value={value} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
