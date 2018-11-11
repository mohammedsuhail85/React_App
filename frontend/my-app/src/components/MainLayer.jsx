import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Form from './Form';

//Redux Components
import { Provider } from 'react-redux';
import store from '../store';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <Provider store={store}>
    <div className={classes.root}>
      <Grid container spacing={24} justify='center'>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <div>
              <Typography component="h2" variant="h4" gutterBottom>
                Registration
              </Typography>
            </div>
            <Form />
          </Paper>
        </Grid>
      </Grid>
    </div>
    </Provider>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
