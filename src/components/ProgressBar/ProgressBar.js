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
  border-radius: ${(({value}) => value <= 98 ? '4px 0px 0px 4px' : (value <= 99.8 ? '4px 2px 2px 4px' : '4px'))};;
  width: ${({value}) => value + '%'};
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
  return <Wrapper size={size} role="progressbar" aria-valuenow="{value}" aria-valuemin="0" aria-valuemax="100">
    <ProgressFill size={size} value={value} />
  </Wrapper>;
};

export default ProgressBar;
