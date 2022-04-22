import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

import Tooltip from '../Tolltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${theme.colors.background};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid ${theme.colors.background};
  color: ${theme.colors.placeholder};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${theme.colors.error};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${theme.colors.primary};
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${theme.colors.link};

    &::placeholder {
      color: ${theme.colors.placeholder};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${theme.colors.error};
    color: ${theme.colors.text};

    &::before {
      border-color: ${theme.colors.error} transparent;
    }
  }
`;
