import React from 'react';

import Select from '../../atoms/Select.js';
import { SHAPE_ITEMS } from './constants.js';
import { pickRandomShape } from './helpers.js';

function SelectShapes({ onSubmit }) {
  return <Select label="Select a shape:" items={SHAPE_ITEMS} onSelect={handleSelect} />;

  function handleSelect(item) {
    onSubmit([item.value, pickRandomShape()]);
  }
}

export default SelectShapes;
