import { Select as RadixSelect } from '@radix-ui/themes';
import { Theme } from '@radix-ui/themes';
import React from 'react';

const Select: React.FC = () => {
  return (
    <Theme>
      <RadixSelect.Root defaultValue="apple">
        <RadixSelect.Trigger className="inline-flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          Select an option
        </RadixSelect.Trigger>

        <RadixSelect.Content className="mt-2 w-full rounded-md border border-gray-300 bg-white shadow-lg">
          <RadixSelect.Group>
            <RadixSelect.Label className="px-2 py-1 text-xs font-semibold uppercase text-gray-500">
              Fruits
            </RadixSelect.Label>
            <RadixSelect.Item
              value="orange"
              className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              Orange
            </RadixSelect.Item>
            <RadixSelect.Item
              value="apple"
              className="flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              Apple
            </RadixSelect.Item>
            <RadixSelect.Item
              value="grape"
              className="cursor-not-allowed px-4 py-2 text-sm text-gray-400"
              disabled
            >
              Grape
            </RadixSelect.Item>
          </RadixSelect.Group>

          <RadixSelect.Separator className="my-2 border-t border-gray-300" />

          <RadixSelect.Group>
            <RadixSelect.Label className="px-2 py-1 text-xs font-semibold uppercase text-gray-500">
              Vegetables
            </RadixSelect.Label>
            <RadixSelect.Item
              value="carrot"
              className="cursor-pointer rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              Carrot
            </RadixSelect.Item>
            <RadixSelect.Item
              value="potato"
              className="cursor-pointer rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              Potato
            </RadixSelect.Item>
          </RadixSelect.Group>
        </RadixSelect.Content>
      </RadixSelect.Root>
    </Theme>
  );
};

export default Select;
