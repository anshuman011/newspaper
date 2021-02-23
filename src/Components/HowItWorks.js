import React from 'react';
import hiwimg from '../asset/Images/howitworksimg.jpg';

const howItWorks=(props)=>{
    return(
        <div>
            <p style={{color:"#0D59A1",fontSize:"25px",fontWeight:"bold",marginBottom:"60px",textAlign:"center"}}>
                HOW IT WORKS</p>
            <img style={{maxWidth: "100%", height: "auto" ,marginBottom:"50px"}} 
                 src={hiwimg} alt="HOW IT WORKS IMAGE"/> 
        </div>
    )
}

export default howItWorks;