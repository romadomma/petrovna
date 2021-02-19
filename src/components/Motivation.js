import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    backgroundAttachment: 'fixed',
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/motivation.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#bd1600',
    textAlign: 'center',
    padding: '0 10vw'
  },
}));

export default function Motivation() {
  const classes = useStyles();
  return (
    <div className={classes.root} id='motivation'>
      <Typography variant='h3'>но нужно со шрифтами поиграться и цветами</Typography><Typography variant='h1'>мотивирующая к покупке фраза, прям слоган какой-то</Typography>
    </div>
  );
}
