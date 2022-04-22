import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    /* background: ${theme.colors.primary}; */
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s ease-in;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);

    /* color: ${theme.colors.border}; */

    &::before {
      content: '';
      border-style: solid;
      /* border-color: ${theme.colors.primary} transparent; */
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
