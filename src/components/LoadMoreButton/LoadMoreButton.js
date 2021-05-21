import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBatch } from '../../redux/batch/batch-actions';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(2),
    width: '100%',
    backgroundColor: '#2196F3',
    '&:hover': {
      backgroundColor: '#2196F3',
    },
  },
  box: {
    paddingTop: theme.spacing(2),
  },
}));

const LoadMoreButton = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Box className={classes.box}>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.button}
        onClick={() => dispatch(updateBatch(1))}
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </Button>
    </Box>
  );
};

export default LoadMoreButton;
