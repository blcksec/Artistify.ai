import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';

import LogoText from './logotext.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: 'left',
      verticalAlign: 'bottom'
    },
  }));



export default (props) => {  
    const classes = useStyles();  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.title}>
                <img src={LogoText} height='38px' alt='logo with text' className={classes.title}/>
            </div>

            <IconButton
              aria-label="Github Repo Link"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>           
            
            <IconButton
              aria-label="About"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <InfoIcon />
            </IconButton>    
          </Toolbar>
        </AppBar>
      </div>
    );
  }