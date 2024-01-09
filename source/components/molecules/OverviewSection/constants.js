import { SHAPE, RESULT } from '../../../constants.js';

export const SHAPE_TEXT = {
  [SHAPE.ROCK]: 'Rock',
  [SHAPE.PAPER]: 'Paper',
  [SHAPE.SCISSORS]: 'Scissors',
};

export const RESULT_TEXT = {
  [RESULT.WIN]: 'You win!',
  [RESULT.LOSE]: 'You lose!',
  [RESULT.DRAW]: 'Draw!',
};

export const ACTION = {
  PLAY_AGAIN: 'playAgain',
  SCORE: 'score',
  EXIT: 'exit',
};

export const ACTION_ITEMS = [
  {
    label: 'Play again',
    value: ACTION.PLAY_AGAIN,
  },
  {
    label: 'Score',
    value: ACTION.SCORE,
  },
  {
    label: 'Exit',
    value: ACTION.EXIT,
  },
];
