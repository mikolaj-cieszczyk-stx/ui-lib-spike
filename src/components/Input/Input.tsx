import React from "react";
import { Input as AntdInput, type InputProps as AntdInputProps } from "antd";
import {
  Input as HlUiInput,
  type InputProps as HlInputProps,
} from "@headlessui/react";

export const AntDesignInput: React.FC<AntdInputProps> = (props) => {
  return <AntdInput {...props} />;
};

export const HeadlessUiInput: React.FC<HlInputProps> = (props) => (
  <form className="max-w-md">
    <label
      htmlFor="default-search"
      className="mb-2 text-sm font-medium text-gray-900"
    >
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg viewBox="0 0 1024 1024" fill="#000" height="1em" width="1em">
          <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
        </svg>
      </div>

      <HlUiInput
        name="full_name"
        type="text"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="placeholder"
        {...props}
      />
    </div>
  </form>
);
