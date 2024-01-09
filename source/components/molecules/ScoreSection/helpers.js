import { RESULT } from '../../../constants.js';
import { checkResult } from '../../../helpers.js';

export function calculateScore(history) {
  const score = history.reduce(
    (acc, curr) => {
      const result = checkResult(curr);

      if (result === RESULT.WIN) {
        return {
          ...acc,
          wins: acc.wins + 1,
        };
      }

      if (result === RESULT.DRAW) {
        return {
          ...acc,
          draws: acc.draws + 1,
        };
      }

      if (result === RESULT.LOSE) {
        return {
          ...acc,
          losses: acc.losses + 1,
        };
      }
    },
    {
      wins: 0,
      draws: 0,
      losses: 0,
    }
  );

  return score;
}
