import React from 'react';
import './CommonFooter.css';
import NavItems from '../Components/NavItems/NavItems';


const commonFooter=(props)=>{
    return(
        <div className="Footer" /* style={{position:"absolute",marginTop:"150px"}} */>
           <ul className="FooterUL"> 
           <NavItems cf toHere="/"> <pre>Home  |</pre></NavItems>
           <NavItems cf toHere="about_us"><pre>About us  |</pre></NavItems>
           <NavItems cf toHere="/all_newspapers"><pre>All Newspapers  |</pre></NavItems>
           <NavItems cf toHere="/"><pre>Contact Us</pre></NavItems>
           </ul>
           <p>© 2021 Converger Solutions Pvt Ltd. All rights reserved</p>
        </div>
    )
}

export default commonFooter;