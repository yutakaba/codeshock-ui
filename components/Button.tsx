import { styled } from '@linaria/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
  href?: string;
};

export const Button = ({ children, href }: Props) => {
  return <StyledButton href={href}>{children}</StyledButton>;
};

const StyledButton = styled.a`
  background-color: #0070f3;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background-color: #005ec4;
  }
`;
