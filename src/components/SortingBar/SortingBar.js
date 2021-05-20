import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import sortingOptions from './sortingOptions';

const SortingBar = () => {
  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      {Object.keys(sortingOptions).map(option => {
        return <Button key={option}>{sortingOptions[option]}</Button>;
      })}
    </ButtonGroup>
  );
};

export default SortingBar;
