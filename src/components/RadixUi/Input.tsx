import { Box, IconButton, TextField } from '@radix-ui/themes';
import React from 'react';

interface InputProps {}

const Input: React.FC<InputProps> = () => {
  return (
    <Box maxWidth="250px">
      <TextField.Root
        placeholder="Search the docs…"
        size="2"
        className="rounded border border-gray-400 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      />
    </Box>
  );
};

export default Input;
