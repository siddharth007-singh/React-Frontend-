import React, { useState } from 'react';
import {Grid, Paper, Button, Toolbar,Typography} from '@material-ui/core';
import HomeProduct from './HomeProduct';
import PRO1 from '../asset/pro1.jpg';
import PRO2 from '../asset/pro2.jpg';
import PRO3 from '../asset/pro3.jpg';
import PRO4 from '../asset/pro4.jpg';

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

function HomeProp(){
    const [cd, cardset] = useState(cardprops);
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs />
                {cd.map((value, key)=>(
                    <Grid item xs={2}>
                        <Toolbar>
                           <HomeProduct
                                id={value.id}
                                image={value.image}
                                def = {value.def}
                                category = {value.category}
                                cost = {value.cost}
                       />
                       </Toolbar>
                    </Grid> 
                ))}
                <Grid item xs />
            </Grid>
        </React.Fragment>
    )
}

export default HomeProp