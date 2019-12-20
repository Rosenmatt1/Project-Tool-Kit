import React from 'react';
import './Navbar.scss'
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Route, Link } from "react-router-dom";
import Form from '../Form/Form.js';
import MenuIcon from '@material-ui/icons/Menu';
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
    }
  }));

  const handleLogIn = (val1, val2) => {
    props.openLogIn(val1)
    props.loggedIn(val2)
  }

  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.spacer}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        {props.logged
        ? 
          <div>
            <PersonIcon />
            <Link to="form">
              <Button onClick={() => handleLogIn(true, false)} color="inherit">logout</Button>
            </Link>
          </div>
          :
          <Link to="form">
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
    logged: state.loggedIn
  }
}

export default connect(mapStateToProps, { openLogIn, loggedIn })(Navbar)