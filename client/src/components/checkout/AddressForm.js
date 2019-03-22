import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
    margin: 'auto',
    textAlign: 'center'

  },
  iconSmall: {
    fontSize: 20,
  },
  root: {
    flexGrow: 1,
  },
});

class AddressForm extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Button variant="contained" size="small" className={classes.button} component={Link} to="/location">
              <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              Find/Save Location
            </Button>
            <Typography variant="h6" component="h6">{this.props.adr}
            </Typography>
          </Grid>

        </Grid>
      </div >
    );
  }
}
AddressForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressForm);
