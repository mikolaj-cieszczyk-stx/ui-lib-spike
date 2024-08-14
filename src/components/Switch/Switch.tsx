import { Field, Switch as HuiSwitch, Label } from "@headlessui/react";
import { Switch as AntdSwitch, type SwitchProps } from "antd";
import React from "react";
interface AntdSwitchProps extends SwitchProps {
  label?: string;
}

export const AntDesignSwitch: React.FC<AntdSwitchProps> = ({
  label,
  ...props
}) => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="flex gap-2 items-center">
      <AntdSwitch
        className="bg-gray-300 hover:bg-gray-400"
        {...props}
        onChange={onChange}
      />
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
};

interface HuiSwitchProps {
  label?: string;
}

export function HeadlessUiSwitch({ label }: HuiSwitchProps) {
  return (
    <Field className="flex gap-2 items-center">
      <>
        <HuiSwitch
          defaultChecked={false}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-300 hover:bg-gray-400 transition data-[checked]:bg-green-600 data-[checked]:hover:bg-green-700"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </HuiSwitch>
        {label && <span className="text-sm">{label}</span>}
      </>
    </Field>
  );
}
