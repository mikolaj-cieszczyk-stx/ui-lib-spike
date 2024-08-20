import { ChakraProvider } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ChakraProviderWrapper = ({ children }: Props) => (
  <ChakraProvider>{children}</ChakraProvider>
);
