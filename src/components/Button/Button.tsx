import {
  Button as AntdButton,
  type ButtonProps as AntdButtonProps,
} from "antd";
import {
  Button as HeadlessButton,
  type ButtonProps as HuiProps,
} from "@headlessui/react";

// Ant Design Button Component
export const Button: React.FC<AntdButtonProps> = (props) => {
  return (
    <AntdButton
      {...props}
      className="mb-2 w-1/4 rounded-full bg-blue-700 px-2 py-1 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
    />
  );
};

// Headless UI Button Component with a variety of button styles
export const HuiButton: React.FC<HuiProps> = (props) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {/* Default Button */}
      <HeadlessButton
        type="button"
        className="mb-2 rounded-full bg-blue-700 px-2 py-1 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
      >
        Default
      </HeadlessButton>

      {/* Alternative Button */}
      <HeadlessButton
        type="button"
        className="mb-2 rounded-full border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
      >
        Alternative
      </HeadlessButton>

      {/* Dark Button */}
      <HeadlessButton
        type="button"
        className="mb-2 rounded-full bg-gray-800 px-2 py-1 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        Dark
      </HeadlessButton>

      {/* Light Button */}
      <HeadlessButton
        type="button"
        className="mb-2 rounded-full border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
      >
        Light
      </HeadlessButton>

      {/* Green Button */}
      <HeadlessButton
        type="button"
        className="mb-2 rounded-full bg-green-700 px-2 py-1 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        Green
      </HeadlessButton>

      {/* Red Button */}
      <HeadlessButton
        type="button"
        className="mb-2 rounded-full bg-red-700 px-2 py-1 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
      >
        Red
      </HeadlessButton>
      <div></div>
      <div></div>

      {/* Yellow Button */}
      <HeadlessButton
        type="button"
        className="flex w-max items-center justify-center gap-2 rounded-full bg-yellow-400 px-2 py-1 text-center text-sm text-black hover:bg-yellow-500"
      >
        <span>Yellow with right icon</span>
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="16px"
          width="16px"
        >
          <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        </svg>
      </HeadlessButton>
      <div></div>

      {/* Purple Button with Icon */}
      <HeadlessButton
        type="button"
        className="flex w-max items-center justify-center gap-2 rounded-full bg-purple-600 px-2 py-1 text-center text-sm text-white hover:bg-purple-700"
      >
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="16px"
          width="16px"
        >
          <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        </svg>
        <span>Purple with left icon</span>
      </HeadlessButton>
      <div></div>

      <HeadlessButton
        type="button"
        className="flex w-max items-center justify-center gap-2 rounded-full bg-green-600 px-2 py-1 text-center text-sm text-white hover:bg-green-700"
      >
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="16px"
          width="16px"
        >
          <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        </svg>
      </HeadlessButton>
    </div>
  );
};
