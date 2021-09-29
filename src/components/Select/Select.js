import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';

const Wrapper = styled.div`
  width: max-content;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 16px 12px 16px;
  white-space: nowrap;
  display: block;
  position: relative;

  :focus {
    outline: 2px solid Highlight;
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
    display: block;
    background: none;
    color: inherit;
    border: none;
    padding-right: 52px;

    :hover, :focus {
      outline: none;
    }
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: 24px;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  return (
    <Wrapper role="combobox" aria-label={label}>
      <select value={value} onChange={onChange}>
        {children}
      </select>
      <IconWrapper>
        <Icon id="chevron-down" strokeWidth={1} size={24} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Select;
