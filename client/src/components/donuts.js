import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Donut from './donut';
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
    donuts: [],
    qty: ''
  };


  // handleChange = name => event => {

  //   var num = Number(event.target.value);
  //   if (num < 0) {
  //     num = 0;
  //   }


  //   this.setState({
  //     [name]: num,
  //   });
  // };

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
          {donuts.map((donut) => (
            <Donut key={donut.name} dnut={donut} />
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