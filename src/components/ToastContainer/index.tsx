import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';
import { ToastMessage } from '../../hooks/toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 /* transform: 'rotateZ(0deg)' */ },
    enter: { right: '0%', opacity: 1 /* transform: 'rotateZ(360deg)' */ },
    leave: { right: '-120%', opacity: 0 /* transform: 'rotateZ(0deg)' */ },
    keys: (message) => message.id,
    delay: 2000,
  });
  return (
    <Container>
      {messagesWithTransitions((props, item) => (
        <Toast message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
// <Container>
//   {messagesWithTransitions.map(() => (
//     <Toast key={message.id} message={message} />
//   ))}
// </Container>
