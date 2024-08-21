import * as Popover from '@radix-ui/react-popover';

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
      Show info
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="rounded-md border border-gray-300 bg-white p-4 text-gray-700 shadow-lg">
        Some content
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
