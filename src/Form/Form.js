import React, { useEffect, useState } from 'react';
import './Form.scss';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { loggedIn } from '../redux/actions';
const axios = require('axios');
// import { Grid } from '@material-ui/core';


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

function Form(props) {
  const [username, captureUserName] = useState('Johny');
  const [password, capturePassword] = useState('Appleseed');

  const logInValidation = (val) => {
    props.loggedIn(val)
  }

  const postUser = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/api/user',
      data: {
        username: username,
        password: password
      }
    });
  }

  useEffect(() => {
    postUser()
  }, [])

  // postData = (route) => {
  //   fetch(`http://localhost:3001/auth/${route}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //     },
  //     body: JSON.stringify({
  //       username: this.refs.username.value,
  //       password: this.refs.password.value
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.jwt) {
  //         localStorage.setItem('jwt', data.jwt)
  //         this.props.setLogin(true)
  //       } else {
  //         this.props.setLogin(false)
  //       }
  //       this.props.displayError(false)
  //     })
  //     .catch(error => {
  //       console.error(error)
  //       this.props.setLogin(false)
  //       this.props.displayError(true)
  //     })
  // }

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

        <Button className="buttonSpacer" onClick={() => logInValidation(true)} variant="contained" color="primary">
          Login
        </Button>

      </div>
    </form>

  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, { loggedIn })(Form)