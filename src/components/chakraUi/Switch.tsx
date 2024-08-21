import {
  Switch as ChakraSwitch,
  FormControl,
  FormLabel,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';

interface SwitchProps {}

export const Switch: React.FC<SwitchProps> = () => {
  return (
    <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
      <ChakraSwitch
        defaultChecked={false}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition hover:bg-gray-400 data-[checked]:bg-green-600 data-[checked]:hover:bg-green-700"
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      </ChakraSwitch>
    </FormControl>
  );
};
