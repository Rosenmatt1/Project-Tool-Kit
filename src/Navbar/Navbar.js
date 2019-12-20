import React from 'react';
import './Navbar.scss'
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Route, Link } from "react-router-dom";
import Form from '../Form/Form.js';
import MenuIcon from '@material-ui/icons/Menu';
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

  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.spacer}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Link to="form">
          <Button color="inherit">Login</Button>
        </Link>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar;