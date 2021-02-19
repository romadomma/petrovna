import { makeStyles } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#494949'
  }
}));

export default function Products() {
  const classes = useStyles();
  return <div className={classes.root} id='products'>
  </div>
}
