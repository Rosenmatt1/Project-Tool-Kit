import React from 'react';
import './Page2.scss'
import { makeStyles } from '@material-ui/core/styles';

function Page2(props) {

  const useStyles = makeStyles(theme => ({
    root: {
    },
  
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      This is Page 2.
    </div>
  )
}

export default Page2;