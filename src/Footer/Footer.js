import React from 'react';
import './Footer.scss'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { tabSelected } from '../redux/actions';
import Products from '../Products/Products.js';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'fixed',
    left: 0,
    bottom: 0,
    right: 0,
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },
  tabs: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
});

function Footer(props) {

  const classes = useStyles();

  return (
    <Paper >
      <Route path="/electronics" component={Products} />
      <Route path="/clothing" component={Products} />
      <Route path="/misc" component={Products} />

      <Tabs
        value={props.tab}
        className={classes.root}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Link to="clothing">
          <Tab onClick={() => props.tabSelected(0)} label="Clothing" />
        </Link>

        <Link to="electronics">
          <Tab onClick={() => props.tabSelected(1)} label="Electronics" />
        </Link>

        <Link to="misc">
          <Tab onClick={() => props.tabSelected(2)}  label="Misc" />
        </Link>
      </Tabs>
    </Paper>
  )
}

const mapStateToProps = (state) => {
  return {
    tab: state.tabSelected
  }
}

export default connect(mapStateToProps, { tabSelected })(Footer)