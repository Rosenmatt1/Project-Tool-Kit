import React from 'react';
import './Navbar.scss'
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Route, Link } from "react-router-dom";
import * as _ from 'lodash';
// import CreateAccount from '../CreateAccount/CreateAccount.js';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import Card from '../Card/Card.js';
import { connect } from 'react-redux';
import { openLogIn, loggedIn, username, enterSite, showLoader } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';

function Navbar(props) {

  const useStyles = makeStyles(theme => ({
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    spacer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    centerer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }));

  const handleLogIn = (val1, val2) => {
    if (val2 === false) {
      props.loggedIn(val2)
      props.openLogIn(val1)
      props.username("")
      localStorage.removeItem('jwt')
    }
    if (val2 === true) {
      props.openLogIn(val1)
    }
  }

  const backToHome = () => {
    props.enterSite(false)
    waitThree()
  }

  const waitThree = () => {
    props.showLoader(true)
    _.delay((val) => {
      props.showLoader(val)
    }, 1000, false)
  }

  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.spacer}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          
          <Route exact path="/" component={Card} />
          <Link to="/">
            <HomeIcon style={{ textDecoration: 'none', color: 'white' }} onClick={() => backToHome(false)} fontSize="large" />
          </Link>
        </IconButton>

        {props.authenticated
          ?
          <div className={classes.centerer}>
            <PersonIcon />
            <div>{props.user}</div>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="loginForm">
              <Button onClick={() => handleLogIn(true, false)} color="inherit">logout</Button>
            </Link>
          </div>
          :
          <Link style={{ textDecoration: 'none', color: 'white' }} to="createAccount">
            <Button onClick={() => handleLogIn(true, true)} color="inherit">Login</Button>
          </Link>
        }

      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state,
    login: state.openLogIn,
    authenticated: state.loggedIn,
    user: state.username
  }
}

export default connect(mapStateToProps, { openLogIn, loggedIn, username, enterSite, showLoader })(Navbar)