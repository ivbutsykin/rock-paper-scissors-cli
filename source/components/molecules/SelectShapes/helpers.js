import { SHAPE } from '../../../constants.js';

export function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function pickRandomShape() {
  const shapes = Object.values(SHAPE);

  const randomIndex = generateRandomNumber(shapes.length);

  return shapes[randomIndex];
}
