import React, { useEffect } from 'react';
import BigText from 'ink-big-text';

import { TIMEOUT_DELAY } from './constants.js';

function LoadingScene({ onFinishLoading }) {
  useEffect(() => {
    setTimeout(() => {
      onFinishLoading();
    }, TIMEOUT_DELAY);
  }, [onFinishLoading]);

  return <BigText text="rock paper scissors" align="center" />;
}

export default LoadingScene;
