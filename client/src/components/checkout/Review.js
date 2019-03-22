import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

function money_round(num) {
  return Math.ceil(num * 100) / 100;
}
const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Review(props) {
  const { classes } = props;
  const products = props.pState.cart
  let total = 0;
  products.forEach(item => {
    total += Number(item[1]) * Number(item[2])
  })
  const addresses = props.pState.adr
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product[0]}>
            <ListItemText primary={product[0] + " " + product[1] + " x $" + product[2]} secondary={product[4]} />
            <Typography variant="body2">${money_round(Number(product[2]) * Number(product[1]))}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {"$ " + money_round(total)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Customer Info
          </Typography>
          <Typography gutterBottom>{props.pState.fname} {props.pState.lname}</Typography>
          <Typography gutterBottom>{addresses}</Typography>
          <Typography gutterBottom>{props.pState.phone}</Typography>
          <Typography gutterBottom>{props.pState.email}</Typography>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);