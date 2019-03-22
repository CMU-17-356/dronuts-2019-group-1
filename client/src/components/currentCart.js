import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
  },
});

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginRight: '100px',
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class CurrentCart extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const cart = this.props.cart;
    // console.log(cart);
    let output;
    let nextStep;
    if (!Array.isArray(cart) || !cart.length) {
      output = <Typography gutterBottom>The Cart is Empty!</Typography>
      nextStep = <Button onClick={this.handleClose} color="primary">
        Purchase Something Before you Checkout!
    </Button>
    } else {
      nextStep = <Button onClick={this.handleClose} component={Link} to="/cart" color="primary">
        Proceed to Checkout
    </Button>
      output = cart.map(item => (
        <div className={classes.root} >

          <Grid item xs={12}>
            <div className={classes.demo}>
              <List dense={false}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={item[3]} />

                  </ListItemAvatar>
                  <ListItemText
                    primary={item[0] + "  " + item[1] + " x $" + item[2]}
                  />
                  <ListItemSecondaryAction >
                    <IconButton aria-label="Delete" onClick={this.props.handleRemoveProduct}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

              </List>
            </div>
          </Grid>
        </div >
      ))
    }

    return (

      <div>
        <IconButton onClick={this.handleClickOpen} aria-label="Cart">
          <Badge badgeContent={this.props.total} color="secondary" classes={{ badge: classes.badge }}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Confirm Donuts?
          </DialogTitle>
          <DialogContent>
            {output}
          </DialogContent>
          <DialogActions>
            {nextStep}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CurrentCart);