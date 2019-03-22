import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';


export class PaymentForm extends React.Component {

  // amount should be passed in based on the current amount in cart
  // 101 is our group's companyID
  async onButtonClicked() {
    const transactionVar = axios.post('http://credit.17-356.isri.cmu.edu/api/transactions', {
      companyId: '101',
      ammount: 15
    });

    const transactionResult = await transactionVar;
    var transactionId = transactionResult.data.id;

    window.open('http://credit.17-356.isri.cmu.edu?transaction_id=' + transactionId);
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Personal Info
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="First Name" onChange={this.props.handleNameChange("fname")} fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="lastName" label="Last Name" fullWidth onChange={this.props.handleNameChange("lname")} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="email" label="Email" onChange={this.props.handleNameChange("email")} fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="phone" label="Phone Number" onChange={this.props.handleNameChange("phone")} fullWidth />
          </Grid>
          <Grid item xs={12}>

          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

}

export default PaymentForm;