import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  height: 100vh; // pega todo view port da tela no height, se usar o 100% tem q usar o 100% no component pai tbm, com o vh nao precisa

  display: flex;
  align-items: stretch; // estica os componentes dentro separados igualmente com todo espaço disponivel
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center; // é a mesma coisa de digitar justify-content e align-items = center so q com unico codigo

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: ${theme.colors.background};
      border-radius: 10px;
      border: 2px solid ${theme.colors.background};
      padding: 16px;
      width: 100%;
      color: ${theme.colors.link};
      &::placeholder {
        color: ${theme.colors.placeholder};
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
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
    }

    a {
      color: ${theme.colors.link};
      display: block;
      margin: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, theme.colors.link)};
      }
    }
  }

  > a {
    color: ${theme.colors.primary};
    display: block;
    margin: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, theme.colors.primary)};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
