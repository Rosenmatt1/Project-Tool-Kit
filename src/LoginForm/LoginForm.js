import React, { useState } from 'react';
import * as _ from 'lodash';
import './LoginForm.scss';
import TextField from '@material-ui/core/TextField';
import { Route, Link } from "react-router-dom";
import Products from '../Products/Products.js';
import Loader from '../Loader/Loader.js';
import CreateAccount from '../CreateAccount/CreateAccount.js'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { loggedIn, username, userID, showLoader } from '../redux/actions';
// const axios = require('axios');
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

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, showEmailError] = useState(false);
  const [passwordError, showPasswordError] = useState(false);
  // isLoggedIn: localStorage.jwt ? true : false,

  const logInValidation = (val) => {
    const validateUsername = /^\w+@\w+\.com/.test(email)
    console.log(validateUsername)

    if (validateUsername === false) {
      console.log("email failed")
      showEmailError(true)
      setEmail("")
      setPassword("")
      if (password.length < 6) {
        showPasswordError(false)
      }
    }

    if (password.length < 6) {
      console.log("password failed")
      showPasswordError(true)
      setEmail("")
      setPassword("")
      if (validateUsername === false) {
        showEmailError(false)
      }
    }

    if (validateUsername && password.length > 6) {
      console.log("user validated")
      waitThree()
      setEmail("")
      setPassword("")
      showEmailError(false)
      showPasswordError(false)
      postUser()
      props.loggedIn(val)
    }
  }

  const waitThree = () => {
    props.showLoader(true)
    _.delay((val) => {
      props.showLoader(val)
    }, 1000, false)
  }

  const postUser = (route) => {
    fetch(`http://localhost:4000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        username: email,
        password: password
      }),
    })
      .then(response => response.json())
      .then(data => {
        const username = data.user.username.slice(0, data.user.username.indexOf('@'))
        props.username(username)
        props.userID(data.user.id)
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt)
          props.loggedIn(true)
        } else {
          console.log("no jwt")
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  // fetchHiddenData = () => {
  //   fetch(`http://localhost:3001/hidden`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //       "Authorization": "Bearer " + localStorage.jwt
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         hiddenData: data.message.user.email
  //       })
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }

  const classes = useStyles();

  return (
    <form className="gridContainer" noValidate autoComplete="off">
      <div className={classes.form}>

        <div> Log In </div>

        <TextField
          // required
          id="standard-required"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        // defaultValue="Hello World" 
        />
        {emailError &&
          <div className="errorMessage">Email must include @.com </div>}

        <TextField
          id="standard-password-input"
          label="Password"
          value={password}
          type="password"
          autoComplete="current-password"
          className="inputSpacer"
          onChange={(e) => setPassword(e.target.value)}
        />

        {passwordError &&
          <div className="errorMessage">Password length must be greater than 6 characters</div>}

        <Route path="/electronics" component={props.loader ? Loader : Products} />
        <Link to="electronics">
          <Button className="buttonSpacer" onClick={() => logInValidation(true)} variant="contained" color="primary">
            Login
        </Button>
        </Link>

        <Route path="/createAccount" component={CreateAccount} />
        <Link to="createAccount">
          <div className="account"> Don't have an account? </div>
        </Link>

      </div>
    </form>

  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    logged: state.loggedIn,
    loader: state.showLoader
  }
}

export default connect(mapStateToProps, { loggedIn, username, userID, showLoader })(LoginForm)