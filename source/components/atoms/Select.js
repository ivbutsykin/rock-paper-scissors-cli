import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';

function Select({ label, items, onSelect }) {
  return (
    <Box flexDirection="column">
      <Text>{label}</Text>

      <SelectInput items={items} onSelect={onSelect} />
    </Box>
  );
}

export default Select;
