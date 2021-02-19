import React, { useEffect, useState } from 'react';
import { makeStyles, IconButton, Collapse, Fade } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundAttachment: 'fixed',
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  logo: {
    background: `url(${process.env.PUBLIC_URL}/assets/logo.jpg)`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '15vw',
    height: '15vw',
    cursor: 'pointer',
  },
  wrapper: {
    textAlign: 'center',
    color: '#f2f2f2',
  },
  goDown: {
    color: '#f2f2f2',
    fontSize: '3rem',
  }
}));

export default function Header() {
  const classes = useStyles();
  const [cheked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return <div className={classes.root} id='header'>
    <Collapse
      in={cheked}
      {...(cheked ? { timeout: 1000 } : {})}
      collapsedHeight={50}
    >
      <Fade
        in={cheked}
        {...(cheked ? { timeout: 900 } : {})}
      >
        <div className={classes.wrapper}>
          <Scroll to='benfits' smooth={true}>
            <div className={classes.logo}>
            </div>
            <IconButton>
              <ExpandMore className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Fade>
    </Collapse>
  </div>
}
