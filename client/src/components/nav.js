import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const styles = {
  colorChange: {
    colorDefault: "#000000"
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,

  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Nav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.colorChange} position="static" color="primary">
          <Toolbar>
            <Typography component={Link} to="/" variant="h5" color="inherit" className={classes.grow} style={{ textDecoration: 'none' }}>
              Dronuts
          </Typography>
            <Button component={Link} to="/cart" color="inherit">Cart</Button>
          </Toolbar>
        </AppBar>
      </div>

    );

  }

}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
