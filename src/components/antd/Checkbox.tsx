import {
  Checkbox as AntdCheckbox,
  type CheckboxProps as AntdCheckboxProps,
} from 'antd';

export const Checkbox: React.FC<AntdCheckboxProps> = (props) => {
  return <AntdCheckbox {...props} />;
};
