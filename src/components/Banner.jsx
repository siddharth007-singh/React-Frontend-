import React from 'react';
import {Typography} from '@material-ui/core';
import BANNAR from '../asset/BANNER.jpg';
import StarIcon from '@material-ui/icons/Star';


function Banner(){
    return(
        <React.Fragment>
            <img src={BANNAR} style={{width:"100%", height:"70vh"}}/>
            <div style={{marginTop:"20px"}}>
                <Typography 
                    style={{
                        fontWeight:"bolder", 
                        fontSize:"25px", 
                        textAlign:"center",
                        color:"#3f51b5"
                    }}>
                    <span><StarIcon style={{marginTop:"15px", color:"#3f51b5", border:""}}/></span>WEEKLY FEATURED PRODUCTS
                </Typography>
            </div>
        </React.Fragment>
    )
}

export default Banner 