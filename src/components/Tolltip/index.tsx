import React, { ReactNode } from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Tolltip: React.FC<TooltipProps> = ({ title, className, children }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tolltip;
