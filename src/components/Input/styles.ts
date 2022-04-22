import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  background: ${theme.colors.background};
  border-radius: 10px;
  border: 2px solid ${theme.colors.background};
  padding: 16px;
  width: 100%;
  color: ${theme.colors.placeholder};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

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
