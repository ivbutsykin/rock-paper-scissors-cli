import React from 'react';
import { Box, Text, Newline } from 'ink';

import Select from '../../atoms/Select.js';
import { calculateScore } from './helpers.js';
import { ACTION, ACTION_ITEMS } from './constants.js';

function ScoreSection({ history, onBack }) {
  const score = calculateScore(history);

  return (
    <Box flexDirection="column">
      <Text>
        <Text>{`Wins: ${score.wins}`}</Text>
        <Newline />
        <Text>{`Draws: ${score.draws}`}</Text>
        <Newline />
        <Text>{`Losses: ${score.losses}`}</Text>
        <Newline />
      </Text>

      <Select label="Select an action:" items={ACTION_ITEMS} onSelect={handleSelect} />
    </Box>
  );

  function handleSelect(item) {
    if (item.value === ACTION.BACK) {
      onBack();
    }
  }
}

export default ScoreSection;
