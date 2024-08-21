import * as Switch from '@radix-ui/react-switch';

const SwitchDemo = () => (
  <div className="flex items-center">
    <label
      className="pr-[15px] text-[15px] leading-none text-black"
      htmlFor="airplane-mode"
    >
      Airplane mode
    </label>
    <Switch.Root
      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition hover:bg-gray-400 data-[checked]:bg-green-600 data-[checked]:hover:bg-green-700"
      id="airplane-mode"
    >
      <Switch.Thumb className="shadow-blackA4 block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
    </Switch.Root>
  </div>
);

export default SwitchDemo;
