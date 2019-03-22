import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import axios from 'axios';
import firebase from '../../firebase-config'
import donut from '../donut';
const db = firebase.firestore();
const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Shipping address', 'Payment details', 'Review your order'];



class Checkout extends React.Component {
  state = {
    activeStep: 0,
    donutData: []
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {

    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  parsedDonuts = (lst) => {
    var donuts = []
    lst.map(i => (
      donuts.push({
        name: i[0],
        qty: i[1],
        price: i[2],
        img: i[3]
      })))

    this.setState({
      donutData: donuts
    }, () => {
      var data = {
        first_name: this.props.pState.fname,
        last_name: this.props.pState.lname,
        lat: this.props.pState.lat,
        lng: this.props.pState.lng,
        donuts: this.state.donutData
      }
      db.collection('orders').add(data);
      console.log(data);
    })


  }

  externalLink = () => {
    const products = this.props.pState.cart
    let total = 0;
    products.forEach(item => {
      total += Number(item[1]) * Number(item[2])
    })
    axios.post('http://credit.17-356.isri.cmu.edu/api/transactions', {
      companyId: '99',
      amount: total
    })
      .then(function (response) {
        console.log(response.data.id);
        window.open('http://credit.17-356.isri.cmu.edu?transaction_id=' + response.data.id);

      })
      .catch(function (error) {
        console.log(error);
      });

    this.parsedDonuts(this.props.pState.cart);

    this.handleNext();


  }
  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    var getStepContent = (step) => {
      switch (step) {
        case 0:
          return <AddressForm adr={this.props.adr} />;
        case 1:
          return <PaymentForm handleNameChange={this.props.handleNameChange} />;
        case 2:
          return <Review pState={this.props.pState} />;
        default:
          throw new Error('Unknown step');
      }
    }

    var condition;
    if (activeStep === steps.length - 1) {
      condition = this.externalLink
    } else {
      condition = this.handleNext;
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    We will email you your order confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={this.handleBack} className={classes.button}>
                          Back
                      </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={condition}
                        className={classes.button}

                      >
                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);