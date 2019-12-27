import React from 'react';
import './Navbar.scss'
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
// import CreateAccount from '../CreateAccount/CreateAccount.js';
import MenuIcon from '@material-ui/icons/Menu';
// import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import { connect } from 'react-redux';
import { openLogIn, loggedIn } from '../redux/actions'
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
      localStorage.removeItem('jwt')
      // hiddenData = ""
    }
    if (val2 === true) {
      props.openLogIn(val1)
      // localStorage.setItem('jwt')
      // hiddenData = ""       //data comes from a get route
    }
  }

  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.spacer}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
          {/* <Route exact path="/" component={Card} />
          <Link to="home">
            <HomeIcon onClick={() => props.enterSite(false)} fontSize="large" />
          </Link> */}
        </IconButton>

        {props.logged
          ?
          <div className={classes.centerer}>
            <PersonIcon />
            <div>{props.username}</div>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="form">
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
    logged: state.loggedIn,
    username: state.username
  }
}

export default connect(mapStateToProps, { openLogIn, loggedIn })(Navbar)