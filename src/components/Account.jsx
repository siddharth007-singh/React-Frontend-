import React from 'react';
import {} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    jumbotron:{
        backgrounColor:"lightgrey",
        width:"100%"
    }
  }));

function Account(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <div style={{backgroundColor:"#f7f7f7", padding:"10px 10px"}}>
                <h1 style={{textAlign:"center", color:"lightgrey"}}>MY ACCOUNT</h1>
            </div>
        </React.Fragment>
    )
}

export default Account