import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Drawer} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { List, ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom';
import MovieIcon from '@material-ui/icons/Movie';
import PublicIcon from '@material-ui/icons/Public';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgb(32, 35, 41)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottom: '1px solid lightgray'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: { 
    width: drawerWidth
  },
  list : {
    width: '100%',
    borderBottom: '1px solid lightgray',
    paddingBottom: '16px'
  },
  listItem: {
    textDecoration: 'none',
    marginLeft: '10px'
  },
  listItemText: {
    paddingLeft: '20px',
    color: 'black',
    alignItems: 'center'  
  }

}));



export default function DenseAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar variant="dense">
          <IconButton onClick={handleDrawerOpen} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Welcome to the club, pal.
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
      className={classes.drawer}
      anchor='left'
      open={open}
      onClose={() => setOpen(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
      >
      <div className={classes.drawerHeader} >
        <IconButton onClick={handleDrawerClose}>
           <ChevronLeftIcon/>
        </IconButton>
      </div>
      <div className={classes.list} >
        <List>
          <Link className={classes.listItem} to='/characters'>
            <ListItem button>
              <AccountBoxIcon style={{color: 'black' }} fontSize="large" />
              <ListItemText className={classes.listItemText} primary="Characters"/>
            </ListItem>
          </Link>
          <Link className={classes.listItem} to='/quiz'>
            <ListItem button>
              <PublicIcon style={{color: 'black' }} fontSize="large" />
              <ListItemText className={classes.listItemText} primary="Quiz"/>
            </ListItem>
          </Link>
          <Link className={classes.listItem} to='/season'>
            <ListItem button>
              <MovieIcon style={{color: 'black' }} fontSize="large" />
              <ListItemText className={classes.listItemText} primary="Best Moments"/>
            </ListItem>
          </Link>
        </List>
      </div>
      
      </Drawer>  

    </div>
  );
}
