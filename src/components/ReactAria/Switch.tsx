import React from 'react';
import { Switch as AriaSwitch } from 'react-aria-components';

interface SwitchProps {}

const Switch: React.FC<SwitchProps> = () => {
  return (
    <div className="flex justify-center rounded-lg">
      <AriaSwitch className="group flex items-center gap-2 text-lg font-semibold text-black">
        <div className="group-pressed:bg-yellow-700 group-selected:bg-amber-800 group-selected:group-pressed:bg-amber-900 box-border flex h-[26px] w-[44px] shrink-0 cursor-default rounded-full border border-solid border-white/30 bg-yellow-600 bg-clip-padding p-[3px] shadow-inner outline-none ring-black transition duration-200 ease-in-out group-focus-visible:ring-2">
          <span className="group-selected:translate-x-[100%] h-[18px] w-[18px] translate-x-0 transform rounded-full bg-white shadow transition duration-200 ease-in-out" />
        </div>
        Wi-Fi
      </AriaSwitch>
    </div>
  );
};

export default Switch;
