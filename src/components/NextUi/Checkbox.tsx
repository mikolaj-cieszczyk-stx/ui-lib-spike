import React from 'react';
import { Checkbox as NextUiCheckbox } from '@nextui-org/react';

export default function App() {
  return (
    <div className="flex gap-4">
      <NextUiCheckbox defaultSelected color="default">
        Default
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected color="primary">
        Primary
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected color="secondary">
        Secondary
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected color="success">
        Success
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected color="warning">
        Warning
      </NextUiCheckbox>
      <NextUiCheckbox defaultSelected color="danger">
        Danger
      </NextUiCheckbox>
    </div>
  );
}
