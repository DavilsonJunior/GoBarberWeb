import styled from 'styled-components';
import { shade } from 'polished';
import { theme } from '../../styles/theme';

export const Container = styled.button`
  background: ${theme.colors.primary};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${theme.colors.border};
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, theme.colors.primary)};
  }
`;
