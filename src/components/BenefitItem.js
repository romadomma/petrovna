import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '25vw',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '0'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  desc: {
    textAlign: 'center'
  },
}));

export default function BenefitItem({data}) {
  const classes = useStyles();
  return <Card className={classes.root} elevation={1}>
      <CardContent>
        <Typography variant='h4' className={classes.title} gutterBottom>{data.title}</Typography>
        <Typography className={classes.desc}>{data.desc}</Typography>
      </CardContent>
    </Card>;
}
