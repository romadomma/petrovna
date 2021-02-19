import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Motivation from './components/Motivation';
import Prices from './components/Prices';
import Contacts from './components/Contacts';
import Request from './components/Request';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}));

export default function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline />
    <Header />
    <Benefits />
    <Products />
    <Motivation />
    <Prices />
    <Contacts />
    <Request />
  </div>;
};
