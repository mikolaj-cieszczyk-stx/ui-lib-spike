import React from "react";
import {
  Button as AntdButton,
  type ButtonProps as AntdButtonProps,
} from "antd";

export const Button: React.FC<AntdButtonProps> = (props) => {
  return <AntdButton {...props} />;
};
