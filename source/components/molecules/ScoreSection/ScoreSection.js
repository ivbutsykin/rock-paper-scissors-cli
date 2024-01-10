import React from 'react';
import { Box, Text, Newline } from 'ink';

import Select from '../../atoms/Select.js';
import { calculateScore } from './helpers.js';
import { ACTION, ACTION_ITEMS } from './constants.js';
import { RESULT, RESULT_COLOR } from '../../../constants.js';

function ScoreSection({ history, onBack }) {
  const score = calculateScore(history);

  return (
    <Box flexDirection="column">
      <Text>
        <Text>
          Wins: <Text color={RESULT_COLOR[RESULT.WIN]}>{score.wins}</Text>
        </Text>
        <Newline />
        <Text>
          Draws: <Text color={RESULT_COLOR[RESULT.DRAW]}>{score.draws}</Text>
        </Text>
        <Newline />
        <Text>
          Losses: <Text color={RESULT_COLOR[RESULT.LOSE]}>{score.losses}</Text>
        </Text>
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
