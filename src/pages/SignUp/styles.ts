import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-up-background.png';
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
  justify-content: center;

  /* place-content: center; // é a mesma coisa de digitar justify-content e align-items = center so q com unico codigo */

  width: 100%;
  max-width: 700px;
`;

const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${apperFromRight} 2s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
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
