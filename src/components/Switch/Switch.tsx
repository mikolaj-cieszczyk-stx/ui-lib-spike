import React from "react";
import { Switch, type SwitchProps } from "antd";

interface AntdSwitchProps extends SwitchProps {
  label?: string;
}

export const AntdSwitch: React.FC<AntdSwitchProps> = ({ label, ...props }) => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="flex gap-2 my-4 items-center">
      <Switch
        className="bg-gray-300 hover:bg-gray-400"
        {...props}
        onChange={onChange}
      />
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
};
