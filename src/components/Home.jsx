import React from 'react';
import Banner from './Banner';
import HomeProp from './HomeProp';
import Shop from './Shop';

function Home(){
  return(
    <React.Fragment>
      <Banner/>
      <HomeProp/>
    </React.Fragment>
  )
}

export default Home