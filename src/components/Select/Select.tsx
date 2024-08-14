import React from "react";
import { Select as AntdSelect, type SelectProps } from "antd";

export const Select: React.FC<SelectProps> = (props) => {
  return <AntdSelect {...props} />;
};
