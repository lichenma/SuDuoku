import React, { Component } from "react";
import { Avatar } from 'material-ui' 
import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

function Icon(props){
    const name = props.name; 
    var avatar;
    if (name === "lichen"){
        avatar = <Avatar alt="Lichen Ma" src='/turtle.jpg'></Avatar>
    } else {
        var initials = name.match(/\b\w/g) || []; 
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase(); 
        avatar = <Avatar alt={name} backgroundColor={stringToColor(name)}>{initials}</Avatar> 
    }

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                variant="dot"
            >
                {avatar}
            </StyledBadge>
        </div>
    );
}

export { Icon };