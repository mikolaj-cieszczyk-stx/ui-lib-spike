import { Checkbox as AriaCheckbox } from 'react-aria-components';

import React from 'react';

interface CheckboxProps {}

const Checkbox: React.FC<CheckboxProps> = () => {
  return (
    <AriaCheckbox>
      <div className="checkbox">
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      Unsubscribe
    </AriaCheckbox>
  );
};

export default Checkbox;
