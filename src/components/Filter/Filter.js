import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import filterOptions from './filterOptions';
import { updateFilters } from '../../redux/filters/filters-actions';
import { getAllFilters } from '../../redux/filters/filters-selectors';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
  },
  text: {
    marginBottom: '20px',
  },
}));

const CustomCheckbox = withStyles({
  root: {
    color: '#2196F3',
  },
})(props => <Checkbox color="default" {...props} />);

const Filter = () => {
  const optionsState = useSelector(getAllFilters);
  const [state, setState] = useState(optionsState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFilters(state));
  }, [dispatch, state]);

  const classes = useStyles();

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography gutterBottom variant="h6">
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </Typography>

      <FormGroup>
        {Object.keys(filterOptions).map(optionKey => {
          return (
            <FormControlLabel
              key={optionKey}
              control={
                <CustomCheckbox
                  checked={state[optionKey]}
                  onChange={handleChange}
                  name={optionKey}
                />
              }
              label={filterOptions[optionKey]}
            />
          );
        })}
      </FormGroup>
    </Paper>
  );
};

export default Filter;
