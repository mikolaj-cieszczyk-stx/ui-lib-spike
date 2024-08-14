import {
  Checkbox as AntdCheckbox,
  type CheckboxProps as AntdCheckboxProps,
} from "antd";
import { Checkbox as HeadlessCheckbox } from "@headlessui/react";

export const Checkbox: React.FC<AntdCheckboxProps> = (props) => {
  return <AntdCheckbox {...props} />;
};

export function HuiCheckbox() {
  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-sm text-gray-900"
        >
          Default checkbox
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked
          onChange={() => console.log("check")}
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label
          htmlFor="checked-checkbox"
          className="ms-2 text-sm text-gray-900"
        >
          Checked state
        </label>
      </div>
    </>
  );
}
