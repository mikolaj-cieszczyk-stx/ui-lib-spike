import { Checkbox as ChakraCheckbox, CheckboxGroup } from '@chakra-ui/react';

interface CheckboxProps {}

const Checkbox: React.FC<CheckboxProps> = () => {
  return (
    <ChakraCheckbox
      defaultChecked
      // className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500"
      css={{ background: 'red' }}
      isInvalid
    >
      Changed style by adding css property
    </ChakraCheckbox>
  );
};

export default Checkbox;
