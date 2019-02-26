import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
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
});
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Donuts extends Component {
  state = {
    donuts: []
  };

  async componentDidMount() {
    try {
      const url = "/api/donuts";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        donuts: data
      })
    } catch (error) {
      this.setState({
        error
      })
    }

  }

  render() {
    const { classes } = this.props;
    const { donuts } = this.state;

    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Grid container spacing={40}>
          {donuts.map((donut, num) => (
            <Grid item key={donut} sm={6} md={4} lg={3}>
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
                  <Typography>
                    {donut.description}
              </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    More info
              </Button>
                  <Button size="small" color="primary">
                    Add to Cart
              </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div >
    );
  }
}
Donuts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Donuts);