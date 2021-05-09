import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    line:{
        marginLeft:"5px",
        color:"grey",
    },
    menuadjust:{
        position:"absolute",
        bottom:"-6px",
    },
    adjust:{
        position:"absolute",
        bottom:"-6px",
        left:"800px"   
    }
  }));


function MenuBar(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <AppBar position="sticky" style={{backgroundColor:"#143c70", height:"50px"}}>
            <div className={classes.menuadjust}>
                <Toolbar>
                    <Typography style={{marginLeft:"180px", fontSize:"15px", fontWeight:"bolder"}}>
                        <NavLink exact to="/" style={{textDecoration:"none", color:"white"}}>HOME</NavLink>
                    </Typography>
                    <div className={classes.line}>|</div>
                    <Typography style={{marginLeft:"10px",fontSize:"15px", fontWeight:"bolder"}}>
                        <NavLink exact to="/shop" style={{textDecoration:"none", color:"white"}}>SHOP</NavLink>
                    </Typography>
                    <div className={classes.line}>|</div>
                    <Typography style={{marginLeft:"10px",fontSize:"15px", fontWeight:"bolder"}}>
                        <NavLink exact to="/Account" style={{textDecoration:"none", color:"white"}}>MY ACCOUNT</NavLink>
                    </Typography>
                    <div className={classes.line}>|</div>
                    <Typography style={{marginLeft:"10px",fontSize:"15px", fontWeight:"bolder"}}>
                        TRACK YOUR ORDER
                    </Typography>
                    <div className={classes.line}>|</div>
                    <Typography style={{marginLeft:"10px",fontSize:"15px", fontWeight:"bolder"}}>
                        <NavLink exact to="/Contact" style={{textDecoration:"none", color:"white"}}>CONTACT US</NavLink>
                    </Typography>
                    <div className={classes.line}>|</div>
                    <Typography style={{marginLeft:"10px",fontSize:"15px", fontWeight:"bolder"}}>
                        CHECKOUT
                    </Typography>
                </Toolbar>
            </div>

            <div className={classes.adjust}>
                <Toolbar>
                    <Typography style={{marginLeft:"180px", fontSize:"15px", fontWeight:"bolder"}}>
                        Email
                    </Typography>
                    <div className={classes.line}>|</div>
                    <Typography style={{marginLeft:"10px",fontSize:"15px", fontWeight:"bolder"}}>
                        09:00 - 21:00
                    </Typography>
                    <div className={classes.line}>|</div>
                    <Typography style={{marginLeft:"10px",fontSize:"15px", fontWeight:"bolder"}}>
                        +91 707798739
                    </Typography>
                </Toolbar>
            </div>
        </AppBar>
        </React.Fragment>
    )   
}

export default MenuBar