import React from 'react';
import NavItems from '../Components/NavItems/NavItems';

const commonFooter=(props)=>{
    return(
        <div style={{position:"absolute",bottom:"0px"}}>
           <NavItems cf>Home</NavItems>
           <NavItems cf>About us</NavItems>
           <NavItems cf>All Newspapers</NavItems>
           <NavItems cf>Contact Us</NavItems>
           <p>© 2021 Converger Solutions Pvt Ltd. All rights reserved</p>
        </div>
    )
}

export default commonFooter;