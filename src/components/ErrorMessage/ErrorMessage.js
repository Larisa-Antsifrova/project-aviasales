import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    backgroundColor: 'lightcoral',
    color: '#ffffff',
  },
}));

const ErrorMessage = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} component="li">
      <Paper className={classes.paper}>
        <Typography component="div">
          <Box fontSize={24} fontWeight={600} textAlign="center">
            Что-то пошло не так!
          </Box>
          <Box fontSize={16} textAlign="center">
            Пожалуйста, попробуйте еще раз.
          </Box>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ErrorMessage;
