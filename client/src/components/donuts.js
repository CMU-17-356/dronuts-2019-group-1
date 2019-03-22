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

import firebase from '../firebase-config'


const db = firebase.firestore();


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


class Donuts extends Component {
  state = {
    donuts: []
  };


  async componentDidMount() {
    try {
      db.collection('donuts').get().then(snapshot => {
        var data = [];
        if (snapshot.empty) {
          console.log('no docs');
          return
        }
        snapshot.forEach(doc => {
          data.push(doc.data());

        })
        this.setState({
          donuts: data
        })
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
                    id="filled-number"
                    label="Qty"
                    // value={this.state.age}
                    // onChange={this.handleChange('age')}
                    type="number"
                    className={classes.textField}
                    margin="normal"
                  />

                </CardContent>
                <CardActions>
                  <Info name={donut.name} desc={donut.description} />
                  <Added />
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