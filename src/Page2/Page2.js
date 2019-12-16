import React from 'react';
import './Page2.scss'
import { makeStyles } from '@material-ui/core/styles';

function Page2(props) {

  const useStyles = makeStyles(theme => ({
    root: {
      // width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0
    },
    menuButton: {
      marginRight: theme.spacing(2),
    }
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
     
    </div>
  )
}

export default Page2;