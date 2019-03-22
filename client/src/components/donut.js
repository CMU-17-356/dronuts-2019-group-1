import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Info from './info'
import Added from './added'
import TextField from '@material-ui/core/TextField';

// import axios from 'axios;'


const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  downSpace: {
    marginBottom: '10%'
  }
});


class Donut extends Component {
  state = {
    qty: ''
  };


  handleChange = name => event => {

    var num = Number(event.target.value);
    if (num < 0) {
      num = 0;
    }
    if (num == 0) {
      num = '';
    }
    this.props.handleQtyChange(num)
    this.setState({
      [name]: num,
    });
  };


  render() {
    const { classes } = this.props;
    const donut = this.props.dnut
    return (
      <Grid item key={donut.name} sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={donut.img} // eslint-disable-line max-len
            title={donut.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {donut.name}
            </Typography>
            <Typography className={classes.downSpace} variant="h6" component="h6">
              ${donut.price}
            </Typography>
            <TextField
              id="outlined-number"
              label="Qty"
              value={this.state.qty}
              onChange={this.handleChange('qty')}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />

          </CardContent>
          <CardActions>
            <Info name={donut.name} desc={donut.description} />
            <Added addToCart={this.props.addToCart} donut={donut} qty={this.props.qty} />
          </CardActions>
        </Card>
      </Grid>

    );
  }
}
Donut.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Donut);