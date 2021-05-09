import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Account from './components/Account';
import Contact from './components/Contact';
import Product from './components/Product';
import Shop from './components/Shop';
import Filters from './components/Filter';
import Sfilter from './components/Sfilter';
import {Switch, Route} from 'react-router-dom';

function App(){
  return(
    <React.Fragment>
      <Header/>
      <MenuBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/account" component={Account}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/product/:id" component={Product}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/shop/:category" component={Shop}/>
        <Route exact path="/:category" component={Sfilter}/>
      </Switch>
    </React.Fragment>
  )
}

export default App