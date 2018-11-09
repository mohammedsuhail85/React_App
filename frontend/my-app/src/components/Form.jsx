import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import * as userAction from '../actions/user-actions';
import { compose } from 'redux';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
];

class OutlinedTextFields extends React.Component {
  state = {
    userId: '',
    name: '',
    gender: 'Male',
    email: '',
    password: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="userID"
            label="User ID"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <TextField
            required
            id="userName"
            label="Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <TextField
            id="gender"
            select
            label="Gender"
            className={classes.textField}
            value={this.state.gender}
            fullWidth={true}
            onChange={this.handleChange('gender')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your gender"
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="email"
            label="Email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            type="password"
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <Button variant="outlined" color="primary" className={classes.button} size="large">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
