import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function createTransaction(){
  let transaction = fetch('http://credit.17-356.isri.cmu.edu/api/transactions', {
    method: 'POST', 
    body: 'companyId=1&amount=5.00',
  });
  //initially hardcode 5 dollars for now just testing
  return transaction.then(response => response.json()).catch(error => console.log(error));
}

function PaymentForm() {
  return () => {
    const new_transaction = createTransaction();
    console.log(new_transaction);
    const transactionId = 1;
    const transaction_url = `http://credit.17-356.isri.cmu.edu/?transaction_id=${transactionId}`;
    window.open(transaction_url, '_blank').focus();

    // <React.Fragment>
    //   <Typography variant="h6" gutterBottom>
    //     Payment method
    //   </Typography>
    //   <Grid container spacing={24}>
    //     <Grid item xs={12} md={6}>
    //       <TextField required id="cardName" label="Name on card" fullWidth />
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <TextField required id="cardNumber" label="Card number" fullWidth />
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <TextField required id="expDate" label="Expiry date" fullWidth />
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <TextField
    //         required
    //         id="cvv"
    //         label="CVV"
    //         helperText="Last three digits on signature strip"
    //         fullWidth
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <FormControlLabel
    //         control={<Checkbox color="secondary" name="saveCard" value="yes" />}
    //         label="Remember credit card details for next time"
    //       />
    //     </Grid>
    //   </Grid>
    // </React.Fragment>

  }
}

export default PaymentForm;