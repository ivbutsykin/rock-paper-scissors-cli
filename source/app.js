import React, { useState } from 'react';
import { Box } from 'ink';

import SelectShapes from './components/molecules/SelectShapes/SelectShapes.js';
import GameResult from './components/organisms/GameResult/GameResult.js';

export default function App() {
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  const isStepOne = step === 1;
  const isStepTwo = step === 2;

  return (
    <Box>
      {isStepOne && <SelectShapes onSubmit={handleUpdateGameHistory} />}
      {isStepTwo && <GameResult history={history} onPlayAgain={handlePlayAgain} />}
    </Box>
  );

  function handleUpdateGameHistory(game) {
    setHistory((curr) => [...curr, game]);
    setStep(2);
  }

  function handlePlayAgain() {
    setStep(1);
  }
}
