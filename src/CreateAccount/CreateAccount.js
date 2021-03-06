import React, { useState } from 'react';
import './CreateAccount.scss';
import * as _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import { Route, Link } from "react-router-dom";
import Products from '../Products/Products.js';
import LoginForm from '../LoginForm/LoginForm.js';
// import Loader from '../Loader/Loader.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { loggedIn, username, userID, showLoader } from '../redux/actions';
// const axios = require('axios');

const useStyles = makeStyles(theme => ({
  form: {
    margin: theme.spacing(1),
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3
  },
}));

function CreateAccount(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, showEmailError] = useState(false);
  const [passwordError, showPasswordError] = useState(false);
  // isLoggedIn: localStorage.jwt ? true : false,

  const url = "https://my-store-toolkit.herokuapp.com/api"
  // "https://my-store-toolkit.herokuapp.com/api"
  // http://localhost:4000/api

  const logInValidation = () => {
    const validateUsername = /^\w+@\w+\.com/.test(email)

    if (validateUsername === false) {
      console.log("email failed")
      showEmailError(true)
      setEmail("")
      setPassword("")
      if (password.length > 6) {
        showPasswordError(false)
      }
    }

    if (password.length <= 6) {
      console.log("password failed")
      showPasswordError(true)
      setEmail("")
      setPassword("")
      if (validateUsername === true) {
        showEmailError(false)
      }
    }

    if (validateUsername && password.length > 6) {
      // console.log("user validated")
      waitThree()
      setEmail("")
      setPassword("")
      showEmailError(false)
      showPasswordError(false)
      // props.loggedIn(true)
      postUser()
    }
  }

  const waitThree = () => {
    props.showLoader(true)
    _.delay((val) => {
      props.showLoader(val)
    }, 1000, false)
  }

  // const postUser = () => {
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:4000/api/user',
  //     data: {
  //       username: email,
  //       password: password
  //     }
  //       // .catch(function (error) {
  //       //   // handle error
  //       //   console.log(error);
  //       // })
  //       // .finally(function (response) {
  //       //   console.log("post finally")
  //       // })
  //   })
  // }

  // const postUser = (route) => {
  //   axios.post(`${url}/user`, {
  //       username: email,
  //       password: password
  //   })
  //     .then(data => {
  //       if (data.response === 400) {
  //         console.log("dataRESPONSE 400 fired!!!!")
  //       }
  //       console.log("createAccount data", data)
  //       const username = data.user.username.slice(0, data.user.username.indexOf('@'))
  //       props.username(username)
  //       props.userID(data.user.id)
  //       if (data.jwt) {
  //         console.log("jwt arrived!")
  //         localStorage.setItem('jwt', data.jwt)
  //         props.loggedIn(true)
  //       } else {
  //         console.log("no jwt")
  //         console.log("data", data)
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }

  const postUser = () => {
    fetch(`${url}/user`, {
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
        console.log("createAccount data", data)
        const username = data.user.username.slice(0, data.user.username.indexOf('@'))
        props.username(username)
        props.userID(data.user.id)
        if (data.jwt) {
          console.log("jwt arrived!")
          localStorage.setItem('jwt', data.jwt)
          props.loggedIn(true)
        } else {
          console.log("no jwt")
          props.loggedIn(false)

        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  // setLogin = (value) => {
  //   const loggingOut = this.state.isLoggedIn && !value
  //   let hiddenData = this.state.hiddenData
  //   if (loggingOut) {
  //     localStorage.removeItem('jwt')
  //     hiddenData = ""
  //   }
  //   this.setState({
  //     isLoggedIn: value,
  //     isErrorDisplayed: false,
  //     hiddenData: hiddenData
  //   })
  // }

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

        <div> Create Account </div>

        <TextField
          // required
          id="standard-required"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        // defaultValue="Hello World" 
        />
        {emailError &&
          <div className="errorMessage"> Must provide a valid .com email address </div>}

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
          <div className="errorMessage"> Password length must be greater than 6 characters </div>}

        {props.authenticated
          ?
          <div>
            <Route path="/electronics" component={Products} />
            <Link to="electronics">
              <Button className="buttonSpacer" onClick={() => logInValidation()} variant="contained" color="primary">
                Create
        </Button>
            </Link>
          </div>
          :
          <Button className="buttonSpacer" onClick={() => logInValidation()} variant="contained" color="primary">
            Create
        </Button>
        }

        <Route path="/loginForm" component={LoginForm} />
        <Link to="loginForm">
          <div className="account"> Already have an account? </div>
        </Link>


      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    authenticated: state.loggedIn,
    loader: state.showLoader
  }
}

export default connect(mapStateToProps, { loggedIn, username, userID, showLoader })(CreateAccount)