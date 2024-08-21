import React from 'react';
import { Checkbox as RadixCheckbox, Text, Flex } from '@radix-ui/themes';

interface CheckboxProps {}

const Checkbox: React.FC<CheckboxProps> = () => {
  return (
    <Text as="label" size="2" className="text-gray-700">
      <Flex gap="2" align="center">
        <RadixCheckbox
          defaultChecked
          className="h-5 w-5 rounded-sm border border-gray-300 checked:h-5 checked:w-5 checked:border-transparent checked:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="ml-2 text-sm">Agree to Terms and Conditions</span>
      </Flex>
    </Text>
  );
};

export default Checkbox;
