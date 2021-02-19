import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import BenefitItem from './BenefitItem';
import benefitsData from '../content/benefits';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-evenly',
    flexWrap: 'wrap',
    height: '100vh',
    backgroundColor: '#f2f2f2'
  },
  title: {
    textAlign: 'center',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '100%',
  },
  button: {
    borderRadius: '0',
    padding: '1rem 2rem',
    backgroundColor: '#ce2711',
    color: '#f2f2f2',
    '&:hover': {
      backgroundColor: '#ab0400',
      color: '#f3f3f3',
    },
  },
}));

export default function Benefits() {
  const classes = useStyles();
  // const cheked = useWindowPosition('header');
  return <div className={classes.root} id='benfits'>
    <div className={classes.title}>
      <h3>&mdash; Нижнее белье &mdash;</h3>
      <h1>Какая-то оригинальная надпись в вашем стиле...</h1>
    </div>
    <div className={classes.container}>
      {benefitsData.map(data => <BenefitItem data={data} />)}
    </div>
    <Button className={classes.button}>Узнать подробнее</Button>
  </div>
}
