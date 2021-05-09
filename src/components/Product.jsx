import react, { useState }  from 'react';
import {Grid,Typography, Button,Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import PRO1 from '../asset/pro1.jpg';
import PRO2 from '../asset/pro2.jpg';
import PRO3 from '../asset/pro3.jpg';
import PRO4 from '../asset/pro4.jpg';
import {useParams, useLocation} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    ban1: {
        width: "100%",
        height: "600px",
    }
}));


const card=[
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

function Product(){
    const classes = useStyles();
    const [cd,cardSet] = useState(card);
    let {id} = useParams();
    const product =  card.find(bishu => bishu.id == id);
    return(
        <div className={classes.grow}>
        
            <Grid container spacing={2} style={{width:"70%",marginLeft:"15%"}}>
                <Grid item xs={6}>
                    <img src={product.image} className={classes.ban1}  />
                </Grid>
                <Grid item xs={4}>
                    <Typography >
                        <Box fontSize={25} fontWeight="bold" marginTop="130px">{product.def}</Box>
                    </Typography>
                    <Typography >
                        <Box fontSize={25} fontWeight="bold" marginTop="50px">{product.category}</Box>
                    </Typography> 
                    <Typography>
                        <Box fontSize={25} marginTop="30px">{product.cost}</Box>
                    </Typography>
                    <Button size="small" variant="contained" >ADD TO CART</Button>
                </Grid>
                
            </Grid>
    </div>
    )
}

export default Product