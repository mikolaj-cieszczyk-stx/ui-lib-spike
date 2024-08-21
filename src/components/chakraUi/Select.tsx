import { Stack, Select as ChakraSelect } from '@chakra-ui/react';
import React from 'react';

interface SelectProps {}

const Select: React.FC<SelectProps> = () => {
  return (
    <Stack spacing={3}>
      <ChakraSelect
        variant="outline"
        placeholder="where does that icon in the middle come from?"
        className="relative w-full cursor-pointer rounded border border-gray-300 bg-white py-2 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
        icon={
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.54-4.46a1 1 0 011.42-1.42 3 3 0 004.24 0 1 1 0 011.42 1.42 5 5 0 01-7.08 0zM9 11a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        }
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </ChakraSelect>
    </Stack>
  );
};

export default Select;
