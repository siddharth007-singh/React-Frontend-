import React, { useState } from "react";
import {List, ListItem, ListItemText, Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

import PRO1 from '../asset/pro1.jpg';
import PRO2 from '../asset/pro2.jpg';
import PRO3 from '../asset/pro3.jpg';
import PRO4 from '../asset/pro4.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
}));


const cardprops=[
    {
        id:"1",
        image:PRO1,
        def:"Fortune Soya Health Refined Soyabean Oil (Pouch) |",
        category:"refine",
        cost:"₹120.00 ₹116.80",

    },
    {
        id:"2",
        image: PRO2,
        def:"Everest Turmeric Powder/Haldi |",
        category:"haldi",
        cost:"₹26.00 – ₹52.00",

    },{
        id:"3",
        image:PRO3,
        def:"Dhara Mustard Oil, 1 Lt (Pouch) | धरा सरसों का तेल",
        category:"oil",
        cost:"₹120.00 ₹116.80",

    },
    {
        id:"4",
        image: PRO4,
        def:"Red Masoor Dal / लाल मसूर दल",
        category:"daal",
        cost:"₹26.00 – ₹52.00",

    }
]
  


function ListShop(props){
    const classes = useStyles();
    const[loop, looplist] = useState(cardprops);
    return(
        <React.Fragment>
            <div className={classes.root}>
                <List component="nav">
                        <ListItem>
                            <ListItemText>
                                <NavLink to={{pathname: `/shop/${props.category}`}} style={{textDecoration: "none",fontSize:15,color: "black",textAlign:"center"}} >{props.category}</NavLink>
                            </ListItemText>
                        </ListItem>
                </List>
            </div>
        </React.Fragment>
    )
}

export default ListShop