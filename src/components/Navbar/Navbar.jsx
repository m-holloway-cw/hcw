import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';



import useStyles from './styles';

const Navbar = ({numItems}) => {
  const classes = useStyles();

 

  return (
    <div>
        <AppBar position='fixed' className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography  to="/" variant="h6" className={classes.title} color="inherit">
            <img src="HCWLogo_Black.png" alt="hollowaycw" height="100px" className={classes.image} /> Holloway Custom Woodworking
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label='Show cart items' color='inherit'>
                <Badge overlap="rectangular" badgeContent={numItems} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
          </div>
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar