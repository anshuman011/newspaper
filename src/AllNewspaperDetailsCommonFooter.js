import React from 'react';
import andcf1 from './asset/Images/AllNewspaperDetailsCommonFooter/andcf1.jpg';
import andcf2 from './asset/Images/AllNewspaperDetailsCommonFooter/andcf2.png';


const AllNewspapersDetailsCommonFooter =(props)=>{
    return(
        <div style={{marginLeft:"100px",height:"380px",width:"80%"}}>
        <p style={{color:"#696969"}}>* Price may vary slightly as per the rates in your area</p>
        <p style={{textAlign:"center", fontSize:"23px",fontWeight:"bold"}}>SUBSCRIBE NOW AND GET</p>
        <div style={{display:"flex",flexFlow:"row",marginLeft:"200px",
                        marginRight:"10%",justifyContent:"space-between"}}>
        <div>
        <img style ={{width:"125px",height:"125px"}} src={andcf1}/>
        <p >FLAT 20% OFF on<br/>All Work From Home Smartdesks<br/>By Desko</p>
        </div>
        <div>
        <img style ={{width:"80px",height:"80px"}} src={andcf2}/>
        <p style={{fontSize:"20px",fontWeight:"bold"}}>EXCITING COUPONS</p>
        <p>Get exciting coupons from big brands <br/>at the end of every month.</p>
        </div>
        </div>
        </div>
    )
}

export default AllNewspapersDetailsCommonFooter;