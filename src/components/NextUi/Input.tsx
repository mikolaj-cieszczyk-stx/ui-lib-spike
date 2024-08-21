import React from 'react';
import { Input as NextUiInput } from '@nextui-org/react';

export default function Input() {
  return (
    <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
      <NextUiInput type="email" label="Email" />
      <NextUiInput type="email" label="Email" placeholder="Enter your email" />
    </div>
  );
}
