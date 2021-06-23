import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Itemlist from './Itemlist'
import Cart from '../CartWidget/cartwidget';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Itemlist edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
    

          </Itemlist>

          <Typography variant="h6" className={classes.title}>
            Alvaro
          </Typography>
          <Button color="inherit">Login</Button>
          <Cart />

        </Toolbar>
      </AppBar>
    </div>
  );
}
