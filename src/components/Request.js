import { makeStyles } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#333335'
  }
}));

export default function Request() {
  const classes = useStyles();
  return <div className={classes.root} id='request'>
  </div>
}
