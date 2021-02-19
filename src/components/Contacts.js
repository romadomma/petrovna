import { makeStyles } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#555555'
  }
}));

export default function Contacts() {
  const classes = useStyles();
  return <div className={classes.root} id='contacts'>
  </div>
}
