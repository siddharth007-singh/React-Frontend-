import React, {useState} from 'react';
import {Grid,List, ListItem, ListItemText, Divider} from '@material-ui/core';
import ListShop from './ListShop';
import ProShop from './ProShop';
import {useParams,Link} from 'react-router-dom';

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

const cat = [
    {category:"daal"},
    {category:"oil"},
    {category:"haldi"},
    {category:"refine"}
]

function Filter(){
   
    const [list_card, procard] = useState(cat);
    let {category} = useParams();
    const filters = cardprops.filter(p =>  p.category == category);

    console.log(filters);
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={1}/>
                <Grid item xs={2}>
                    <List component="nav">
                        <ListItem>
                            <ListItemText>
                                <Link style={{textDecoration: "none",fontSize:15,color: "skyblue"}} to="/shop">All</Link>
                            </ListItemText>
                        </ListItem>
                        <Divider/>
                    </List>
                    {list_card.map((l,key) => (
                        <ListShop category={l.category} />
                    ))}
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={5}>
                    {filters.map((p, key)=>(
                        <Grid item xs={3}>
                            <ProShop id={p.id} image={p.image} title={p.def} price={p.cost} category={p.category}/>
                        </Grid> 
                    ))} 
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </React.Fragment>
    )
}

export default Filter