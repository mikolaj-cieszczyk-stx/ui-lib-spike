import { Field, Switch as HuiSwitch } from '@headlessui/react';

interface HuiSwitchProps {
  label?: string;
}

export function Switch({ label }: HuiSwitchProps) {
  return (
    <Field className="flex items-center gap-2">
      <>
        <HuiSwitch
          defaultChecked={false}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition hover:bg-gray-400 data-[checked]:bg-green-600 data-[checked]:hover:bg-green-700"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </HuiSwitch>
        {label && <span className="text-sm">{label}</span>}
      </>
    </Field>
  );
}
