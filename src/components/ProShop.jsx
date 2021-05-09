import React, {useState} from "react";
import {Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles({
    paper:{
        width:200,
        padding:"10px 20px", 
        textAlign:"center",
    }
});

function ProShop(props){
    const classes = useStyles();
    return(
        <React.Fragment>
            <Paper className={classes.paper} elevation>
                <img src={props.image}/>
                {props.def}
                <br/>
                {props.cost}
                <br/>
                <Typography variant="h6" component="h6">{props.category}</Typography>
            </Paper>
        </React.Fragment>
    )
}
export default ProShop