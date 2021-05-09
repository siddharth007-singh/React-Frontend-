import React from 'react';
import {Grid, Paper, Button, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
    paper:{
        width:200,
        padding:"10px 20px", 
        textAlign:"center",
    }
});
  

function HomeProduct(props){
    const [count, counted] = useState(0);
    const classes = useStyles();
    return(
        <React.Fragment>
            <Paper className={classes.paper} elevation>
                <NavLink to={{pathname: `/product/${props.id}`}}><img src={props.image}/></NavLink>
                {props.def}
                <br/>
                {props.cost}
                <br/>
                <Typography variant="h6" component="h6">{props.category}</Typography>
                <Toolbar>
                    <Grid xs={4}>
                        <Button variant="contained" color="primary" onClick={()=>counted(count+1)}>+</Button>
                    </Grid>
                    <Grid xs={4} spacing={5}>{count}</Grid>
                    <Grid xs={4}>
                        <Button variant="contained" color="secondary"  onClick={()=>counted(count-1)}>-</Button>
                    </Grid>
                </Toolbar>
            </Paper>
        </React.Fragment>
    )
}

export default HomeProduct