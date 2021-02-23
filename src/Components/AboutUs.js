import React from 'react';
import aboutusimg from '../asset/Images/aboutusimg.jpg';

const aboutUs =(props)=>{
    return(
        <div style={{display:"flex",flexFlow:"row wrap",alignContent:"space-around",alignItems: "flex-start",
        justifyContent:"space-around",position:"relative"}}>
            <div style={{height:"60%",width:"40%"}}>
            <img style={{width: "100%", height: "60%" ,marginTop:"40px",marginLeft:"10%"
                        }} 
                 src={aboutusimg} alt="HOW IT WORKS IMAGE"/>
            </div>
            <div style={{width:"50%",fontSize:"18px",marginRight:"20px"}}>
            <p style={{color:"#0D59A1",fontWeight:"700",fontSize:"25px"}}>ABOUT US</p>
            <p style={{textAlign: "justify",opacity:"0.7"}}>
                    Newspapers in India are like a commodity. Even in this digital era,
                     650 Million People read it every morning along with their cup of tea. 
                     But to avail or start them off requires knocking your neighbors door 
                    or wake up in UnGodly hours to communicate to your hawker! The system should
                     be as smooth as you can now order your shoes, groceries or even plumber nowadays! 
                     And yes we know how messy your place gets when the papers you read stockpile. And 
                     then you need to synchronize your routine with the raddiwala's scream outside.<br/>
                    </p>
                     <p style={{textAlign: "justify",opacity:"0.7"}}>
                      So that you stay lazy forever, we have started Newspaperkart.com. We provide consumers 
                      with the best deals and low prices on newspaper delivery from a wide variety of titles. 
                      Founded in 2016, NewspaperKart is the leading online subscription service for local and
                      national newspapers on the web. We have a direct relationship with
                      every Newspaper Company ensuring prompt and reliable service with many benefits.
                     </p>
                     <p style={{textAlign: "justify",opacity:"0.7"}}>
                     Your newspaper begins within one week of the time you place the order.Your order information
                      is kept safe, and we value your privacy.You will be receiving your newspaper from the same 
                      regular vendor at the same time. Just this time you will be able gain benefits worth upto
                       70% of your paper price. We at Newspaperkart help you in Converting your monthly scrap from 
                       a liability to an asset ! We Provide free monthly scrap-picking services and in return give
                      hard cash and exciting coupons for food,breakfast,tea,magazines,etc on every pick-up.
                     </p>
                     <p style={{textAlign: "justify",opacity:"0.7"}}>
                     Our Vision is to Streamline the Newspaper Circulation in India by using a revolutionizing the
                      print & recycling industry, Hence providing a One Stop Solution for Customers, Newspaper Companies
                       and Recycling.  And so comes the cliche : Sit back , relax and enjoy reading. Subscribe Now!
                     </p>
                     </div>
        </div>

    )
} 

export default aboutUs;