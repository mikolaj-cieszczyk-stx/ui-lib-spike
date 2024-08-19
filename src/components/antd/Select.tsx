import { Select as AntdSelect, type SelectProps } from 'antd';
import React, { useState } from 'react';

export const Select: React.FC<SelectProps> = (props) => {
  return <AntdSelect {...props} />;
};
