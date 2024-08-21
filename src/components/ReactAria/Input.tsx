import { TextField, Label, Input as AriaInput } from 'react-aria-components';

import React from 'react';

interface InputProps {}

const Input: React.FC<InputProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <TextField>
        <Label>First name</Label>
        <AriaInput className="block w-full rounded border border-green-400 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 focus-visible:outline-green-500" />
      </TextField>
    </div>
  );
};

export default Input;
