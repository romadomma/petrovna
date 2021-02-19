import { makeStyles } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#d3d3d3'
  }
}));

export default function Prices() {
  const classes = useStyles();
  return <div className={classes.root} id='prices'>
  </div>
}
