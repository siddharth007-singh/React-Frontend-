import React,{useState} from 'react';
import {AppBar, Typography, Toolbar, Button, FormControl, MenuItem, InputLabel, Select, NativeSelect, InputBase} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import LOGO from '../asset/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import PRO1 from '../asset/pro1.jpg';
import PRO2 from '../asset/pro2.jpg';
import PRO3 from '../asset/pro3.jpg';
import PRO4 from '../asset/pro4.jpg';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(4),
      },
    },
    input: {
      borderRadius: 25,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 13,
      padding: '7px 5px 10px 10px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 25,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    roots: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function Header(){
    const classes = useStyles();
    const [s, sfilt] = useState("");

    const SearchFilter = (event) =>{
      const data = event.target.value;
      sfilt(data);
      //jo bhi search karenge uska data s me save ho gya hai ab bas url se wo s ka data pass krna hai 
    }

    return(
        <AppBar position="static" style={{backgroundColor:"white", border:"0", margin:"0", padding:"0"}}>
            <Toolbar>
                <div>
                    <img src={LOGO} style={{width:"300px", padding:"10px 10px", marginLeft:"150px"}}/>
                </div>
                <FormControl>
                    <NativeSelect input={<BootstrapInput />}>
                        <option>All</option>
                        <option>Ten</option>
                        <option>Twenty</option>
                        <option>Thirty</option>
                    </NativeSelect>
                </FormControl>
                <FormControl style={{marginLeft:"5px"}}>
                    <BootstrapInput style={{width:"250px"}} placeholder="Search Product.." onChange={SearchFilter} value={s}/>
                    <SearchIcon style={{color:"grey", position:"absolute", left:"200px", top:"5px", width:"40px"}}/>
                </FormControl>

            </Toolbar>
        </AppBar>
    )
}

export default Header