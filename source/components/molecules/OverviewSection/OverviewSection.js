import React from 'react';
import { Box, Text, Newline, useApp } from 'ink';

import Select from '../../atoms/Select.js';
import { checkResult } from '../../../helpers.js';
import { RESULT_COLOR } from '../../../constants.js';
import { SHAPE_TEXT, RESULT_TEXT, ACTION, ACTION_ITEMS } from './constants.js';

function OverviewSection({ game, onPlayAgain, onShowScore }) {
  const { exit } = useApp();

  const overviewText = `${SHAPE_TEXT[game[0]]} vs ${SHAPE_TEXT[game[1]]}`;

  const result = checkResult(game);
  const resultText = RESULT_TEXT[result];

  return (
    <Box flexDirection="column">
      <Text>
        <Text>{overviewText}</Text>
        <Newline />
        <Text color={RESULT_COLOR[result]}>{resultText}</Text>
        <Newline />
      </Text>

      <Select label="Select an action:" items={ACTION_ITEMS} onSelect={handleSelect} />
    </Box>
  );

  function handleSelect(item) {
    if (item.value === ACTION.PLAY_AGAIN) {
      onPlayAgain();
    }

    if (item.value === ACTION.SCORE) {
      onShowScore();
    }

    if (item.value === ACTION.EXIT) {
      exit();
    }
  }
}

export default OverviewSection;
