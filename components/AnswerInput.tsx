'use client';

import React from 'react'; 
import { styled } from '@linaria/react';

const AnswerInput = ({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return <Input type="text" value={value} onChange={onChange} placeholder="答えを入力" />;
};

export default AnswerInput;

const Input = styled.input`
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  width: 100%;
`;