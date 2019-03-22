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
    const transactionVar = axios.post('http://credit.17-356.isri.cmu.edu/api/transactions',{
                companyId : '101',
                ammount : 15
    });

    const transactionResult = await transactionVar;
    var transactionId = transactionResult.data.id;

    window.open('http://credit.17-356.isri.cmu.edu?transaction_id=' + transactionId);
  }

  render() {
    return (
      <Button variant="contained" 
              onClick = {this.onButtonClicked} 
              Link to="/review">
        Enter billing details with our secure commerce site
      </Button>
    );
  }
}

export default PaymentForm;