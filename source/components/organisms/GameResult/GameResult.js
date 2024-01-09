import React, { useState } from 'react';
import { Box } from 'ink';

import OverviewSection from '../../molecules/OverviewSection/OverviewSection.js';
import ScoreSection from '../../molecules/ScoreSection/ScoreSection.js';
import { SECTION } from './constants.js';

function GameResult({ history, onPlayAgain }) {
  const [section, setSection] = useState(SECTION.OVERVIEW);

  const lastGame = history[history.length - 1];

  const isOverviewSection = section === SECTION.OVERVIEW;
  const isScoreSection = section === SECTION.SCORE;

  return (
    <Box>
      {isOverviewSection && (
        <OverviewSection game={lastGame} onPlayAgain={onPlayAgain} onShowScore={handleShowScore} />
      )}
      {isScoreSection && <ScoreSection history={history} onBack={handleShowOverview} />}
    </Box>
  );

  function handleShowScore() {
    setSection(SECTION.SCORE);
  }

  function handleShowOverview() {
    setSection(SECTION.OVERVIEW);
  }
}

export default GameResult;
