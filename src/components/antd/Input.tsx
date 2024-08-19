import { Input as AntdInput, type InputProps as AntdInputProps } from 'antd';
import React from 'react';

export const Input: React.FC<AntdInputProps> = (props) => {
  return <AntdInput {...props} />;
};
