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

class Registration extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gender: 'Male',
      email: null,
      password: null,
      userName: null,
      userID: null,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleChange = name => event => {
    event.preventDefault();
    console.log(name + ' : ' + event.target.value);
    this.setState({
      [name]: event.target.value,
    });
  };

  handleTextChange = () => event => {
    event.preventDefault();
    console.log(event.target.id + ' : ' + event.target.value);
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleButtonClick = () => event => {
    event.preventDefault();
    console.log('Submitted');
    console.log(this.state);

    if (this.state.userID != null) {
      if (this.state.userName != null) {
        if (this.state.email != null) {
          if (this.state.password != null) {
            console.log('Submitted');
            console.log(this.state);

            this.props.submitRegister(this.state);

          } else {
            alert('Provide Password');
          }
        } else {
          alert('Provide Email');
        }
      } else {
        alert('Provide Username');
      }
    } else {
      alert('Provide User ID');
    }

  }

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
            onChange={this.handleTextChange()}

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
            onChange={this.handleTextChange()}
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
            onChange={this.handleTextChange()}
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
            onChange={this.handleTextChange()}
          />
          <br />
          <br />
          <Button variant="outlined"
            color="primary"
            className={classes.button}
            size="large"
            onClick={this.handleButtonClick()}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

})

// export default withStyles(styles)(Registration);
export default compose(
  withStyles(styles),
  connect(mapStateToProps, (userAction)),
)(Registration);
