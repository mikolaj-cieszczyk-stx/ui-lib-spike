import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as AriaSelect,
  SelectValue,
} from 'react-aria-components';
import type { ListBoxItemProps } from 'react-aria-components';

export function Select() {
  return (
    <div className="flex rounded-lg">
      <AriaSelect className="flex w-[200px] flex-col gap-1">
        <Label className="cursor-default text-white">Status</Label>
        <Button className="pressed:bg-opacity-100 flex cursor-default items-center rounded-lg border-0 bg-white bg-opacity-90 py-2 pl-5 pr-2 text-left text-base leading-normal text-gray-700 shadow-md ring-white ring-offset-2 ring-offset-rose-700 transition focus:outline-none focus-visible:ring-2">
          <SelectValue className="flex-1 truncate placeholder-shown:italic" />
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M16.939 7.939L12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z" />
          </svg>
        </Button>
        <Popover className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out max-h-60 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5">
          <ListBox className="p-1 outline-none">
            <StatusItem textValue="Backlog">
              <Status className="bg-gray-500" />
              Backlog
            </StatusItem>
            <StatusItem textValue="In Progress">
              <Status className="bg-blue-500" />
              In Progress
            </StatusItem>
            <StatusItem textValue="In Review">
              <Status className="bg-yellow-500" />
              In Review
            </StatusItem>
            <StatusItem textValue="Done">
              <Status className="bg-green-500" />
              Done
            </StatusItem>
            <StatusItem textValue="Won't Do">
              <Status className="bg-red-500" />
              Won't Do
            </StatusItem>
          </ListBox>
        </Popover>
      </AriaSelect>
    </div>
  );
}

function StatusItem(props: ListBoxItemProps & { children: React.ReactNode }) {
  return (
    <ListBoxItem
      {...props}
      className="group flex cursor-default select-none items-center gap-2 rounded px-4 py-2 text-gray-900 outline-none focus:bg-rose-600 focus:text-white"
    >
      {({ isSelected }) => (
        <>
          <span className="group-selected:font-medium flex flex-1 items-center gap-2 truncate font-normal">
            {props.children}
          </span>
        </>
      )}
    </ListBoxItem>
  );
}

function Status({ className }: { className: string }) {
  return (
    <span
      className={`h-3 w-3 rounded-full border border-solid border-white ${className}`}
    />
  );
}
