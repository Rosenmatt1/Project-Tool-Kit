import React, { useState } from 'react';
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
  const [email, captureEmail] = useState("");
  const [password, capturePassword] = useState("");
  const [showEmailError, emailValidation] = useState(false);
  const [showPasswordError, passwordValidation] = useState(false);

  const logInValidation = (val) => {
    if (!email.includes('@.com')) {
      console.log("email failed")
      emailValidation(true)
    }
    if (password.length < 6) {
      console.log("password failed")
      passwordValidation(true)
    }

    if (email.includes('@.com') && password.length > 6) {
      console.log("email validated")
      // postUser()
      // props.loggedIn(val)
    }
  }

  const postUser = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4000/api/user',
      data: {
        username: email,
        password: password
      }
    });
    //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  // // .finally(function (response) {
  // // })
  }


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
          onChange={(e) => captureEmail(e.target.value)}
        // defaultValue="Hello World" 
        />
        {showEmailError && 
          <div className="errorMessage">Email must include @.com </div>}

        
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className="inputSpacer"
          onChange={(e) => capturePassword(e.target.value)}
        />
        {showPasswordError &&
          <div className="errorMessage">Password length must be greater than 6 characters</div>}

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
    logged: state.loggedIn
  }
}

export default connect(mapStateToProps, { loggedIn })(Form)