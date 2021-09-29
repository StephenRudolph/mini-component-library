import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';

const Wrapper = styled.div`
  width: fit-content;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 16px 12px 16px;
  white-space: nowrap;
  display: block;

  :focus {
    border: 2px solid Highlight;
    padding: 10px 14px 10px 14px;
  }

  :hover {
    color: ${COLORS.black};
  }

  select {
    box-sizing: border-box;
    font-family: inherit;
    font-size: 16px;
    -webkit-appearance: none;
    appearance: none;
    display: inline-block;
    background: none;
    color: inherit;
    border: none;
    padding-right: 24px;

    :hover, :focus {
      outline: none;
    }
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
`;

const Select = ({ label, value, onChange, children }) => {
  return (
    <Wrapper role="combobox" aria-label={label}>
      <select value={value} onChange={onChange}>
        {children}
      </select>
      <IconWrapper>
        <Icon id="chevron-down" strokeWidth="2" size="12" />
      </IconWrapper>
    </Wrapper>
  );
};

export default Select;
