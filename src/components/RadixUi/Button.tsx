import React from 'react';
import { Button as RadixButton } from '@radix-ui/themes';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <RadixButton
        type="button"
        className="flex h-6 w-max items-center rounded-full bg-green-600 px-2 py-1 text-sm font-medium text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-400"
        onClick={() => console.log('elo')}
      >
        Button
      </RadixButton>

      <RadixButton
        disabled
        type="button"
        className="flex h-6 w-max items-center rounded-full bg-green-600 px-2 py-1 text-sm font-medium text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-400"
      >
        Disabled
      </RadixButton>

      <RadixButton
        type="button"
        className="flex h-6 w-max items-center justify-center gap-2 rounded-full bg-green-600 px-2 py-1 text-center text-sm font-medium text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-400"
      >
        Button
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="16px"
          width="16px"
        >
          <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        </svg>
      </RadixButton>

      <RadixButton
        disabled
        type="button"
        className="flex h-6 w-max items-center justify-center gap-2 rounded-full bg-green-600 px-2 py-1 text-center text-sm font-medium text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-400"
      >
        Disabled
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="16px"
          width="16px"
        >
          <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        </svg>
      </RadixButton>

      <RadixButton
        type="button"
        className="flex h-6 w-max items-center rounded-full bg-green-600 px-2 py-1 text-sm font-medium text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-400"
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
      </RadixButton>

      <RadixButton
        disabled
        type="button"
        className="flex h-6 w-max items-center rounded-full bg-green-600 px-2 py-1 text-sm font-medium text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-400"
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
      </RadixButton>

      <RadixButton
        type="button"
        className="border-3 flex h-6 w-max items-center rounded-full border border-green-600 px-2 py-1 text-sm font-medium text-green-600 hover:bg-custom-green-hover active:bg-custom-green-pressed disabled:border-gray-400 disabled:bg-inherit disabled:text-gray-400"
      >
        Button
      </RadixButton>

      <RadixButton
        disabled
        type="button"
        className="border-3 flex h-6 w-max items-center rounded-full border border-green-600 px-2 py-1 text-sm font-medium text-green-600 hover:bg-custom-green-hover active:bg-custom-green-pressed disabled:border-gray-400 disabled:bg-inherit disabled:text-gray-400"
      >
        Disabled
      </RadixButton>

      <RadixButton
        type="button"
        className="border-3 flex h-6 w-max items-center justify-center gap-2 rounded-full border border-green-600 px-2 py-1 text-center text-sm font-medium text-green-600 hover:bg-custom-green-hover active:bg-custom-green-pressed disabled:border-gray-400 disabled:bg-gray-400 disabled:bg-inherit disabled:text-gray-400"
      >
        Button
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="16px"
          width="16px"
        >
          <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        </svg>
      </RadixButton>

      <RadixButton
        disabled
        type="button"
        className="border-3 flex h-6 w-max items-center justify-center gap-2 rounded-full border border-green-600 px-2 py-1 text-center text-sm font-medium text-green-600 hover:bg-custom-green-hover active:bg-custom-green-pressed disabled:border-gray-400 disabled:bg-gray-400 disabled:bg-inherit disabled:text-gray-400"
      >
        Disabled
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="16px"
          width="16px"
        >
          <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
        </svg>
      </RadixButton>

      <RadixButton
        type="button"
        className="border-3 flex h-6 w-max items-center rounded-full border border-green-600 px-2 py-1 text-sm text-green-600 hover:bg-custom-green-hover active:bg-custom-green-pressed disabled:border-gray-400 disabled:bg-inherit disabled:text-gray-400"
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
      </RadixButton>

      <RadixButton
        disabled
        type="button"
        className="border-3 flex h-6 w-max items-center rounded-full border border-green-600 px-2 py-1 text-sm text-green-600 hover:bg-custom-green-hover active:bg-custom-green-pressed disabled:border-gray-400 disabled:bg-inherit disabled:text-gray-400"
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
      </RadixButton>
    </div>
  );
};

export default Button;
