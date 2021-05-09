import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ProShop from './ProShop';
import {useParams} from 'react-router-dom';

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

    },
]

function Sfilter(){
    let {category} = useParams();
    const Search = cardprops.filter(p =>  p.category == category);
    return(
        <React.Fragment>
            <Grid container>
                {Search.map((p, key)=>(
                    <Grid item xs={12}>
                        <ProShop id={p.id} image={p.image} title={p.def} price={p.cost} category={p.category}/>
                    </Grid> 
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default Sfilter