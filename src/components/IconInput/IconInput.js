import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  width: var(--width);
  color: ${COLORS.gray700};
  display: block;
  font-weight: 700;
  white-space: nowrap;
  border-bottom: ${(({size}) => size === 'large' ? '2px' : '1px')} solid ${COLORS.black};

  :focus, :focus-within {
    outline: 2px solid Highlight;
  }

  :hover {
    color: ${COLORS.black};
  }

  input {
    display: inline-block;
    vertical-align: top;
    -webkit-appearance: none;
    appearance: none;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    margin: 0;
    box-sizing: border-box;
    box-shadow: none;
    border: none;
    font-size: ${(({size}) => size === 'large' ? '18px' : '14px')};
    line-height: ${(({size}) => size === 'large' ? '21px' : '16px')};
    padding-left: ${(({size}) => size === 'large' ? '16px' : '10px')};

    ::placeholder {
      font-weight: normal;
      color: ${COLORS.gray500};
    }

    :hover, :focus {
      outline: none;
    }
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper size={size} style={{
      '--width': width + 'px',
    }}>
      <IconWrapper>
        <Icon id={icon} strokeWidth="{size === 'large' ? '2' : '1'}" size={size === 'large' ? '22' : '14'} />
      </IconWrapper>
      <label>
        <VisuallyHidden>
          <span>{label}</span>
        </VisuallyHidden>
        <input id={label} placeholder={placeholder} />
      </label>
    </Wrapper>
  );
};

export default IconInput;
