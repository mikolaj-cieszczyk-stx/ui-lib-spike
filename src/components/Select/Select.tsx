import React from "react";
import { Select as AntdSelect, type SelectProps } from "antd";
import { Select as HeadlessSelect } from "@headlessui/react";

export const Select: React.FC<SelectProps> = (props) => {
  return <AntdSelect {...props} />;
};

export function HuiSelect() {
  return (
    <form className="max-w-sm">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Select an option
      </label>
      <HeadlessSelect
        name="status"
        aria-label="Project status"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </HeadlessSelect>
    </form>
  );
}
