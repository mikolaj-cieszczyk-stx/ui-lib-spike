import React from "react";
import { Input as AntdInput, type InputProps } from "antd";

export const Input: React.FC<InputProps> = (props) => {
  return <AntdInput {...props} />;
};
