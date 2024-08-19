import { Switch as AntdSwitch, type SwitchProps } from 'antd';
import React from 'react';
interface AntdSwitchProps extends SwitchProps {
  label?: string;
}

export const Switch: React.FC<AntdSwitchProps> = ({ label, ...props }) => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="flex items-center gap-2">
      <AntdSwitch
        className="bg-gray-300 hover:bg-gray-400"
        {...props}
        onChange={onChange}
      />
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
};
