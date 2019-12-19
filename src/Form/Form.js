import React from 'react';
import './Form.scss';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  form: {
    margin: theme.spacing(1),
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid red',
    zIndex: 3
  },

}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className="gridContainer" noValidate autoComplete="off">
      <div className={classes.form}>

        <TextField
          // required
          id="standard-required"
          label="Email"
        // defaultValue="Hello World" 
        />

        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className="inputSpacer"
        />

        <Button className="buttonSpacer" variant="contained" color="primary">
          Login
        </Button>

      </div>
    </form>

  );
}