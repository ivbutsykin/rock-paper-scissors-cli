import { SHAPE, RESULT } from './constants.js';

export function checkResult(game) {
  const [shape1, shape2] = game;

  if (shape1 === shape2) {
    return RESULT.DRAW;
  }

  if (
    (shape1 === SHAPE.ROCK && shape2 === SHAPE.SCISSORS) ||
    (shape1 === SHAPE.PAPER && shape2 === SHAPE.ROCK) ||
    (shape1 === SHAPE.SCISSORS && shape2 === SHAPE.PAPER)
  ) {
    return RESULT.WIN;
  }

  return RESULT.LOSE;
}
