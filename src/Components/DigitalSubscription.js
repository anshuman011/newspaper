import React,{Component} from 'react';
import './DigitalSubscription.css';
import news1 from '../asset/Images/digital subscription/news1.jpg';
import news2 from '../asset/Images/digital subscription/news2.jpg';
import news3 from '../asset/Images/digital subscription/news3.jpg';
import news4 from '../asset/Images/digital subscription/news4.jpg';
import news5 from '../asset/Images/digital subscription/news5.jpg';
import news6 from '../asset/Images/digital subscription/news6.png';
import news7 from '../asset/Images/digital subscription/news7.jpg';

const DigitalSubs =(props)=>{
    return(
        <div className="DigitalSubscription">
            <div className="OneNewspaper">
            <p style={{color:"#0D59A1",fontWeight:"700",textAlign:"center",fontSize:"20px"}} >
                HT DIGITAL SUBSCRIPTION</p>
            <ul style={{fontSize:"14px",fontWeight:"400",opacity:"0.9"}}>
                <li>Complete E-paper Access Across All Devices</li>
                <li>Complete Downloadable Pdf Version</li>
                <li>Access to Archives & Premium Content</li>
            </ul>
            <img className="Imgg" src={news1} alt="MyShopLogo"/>
            <p style={{fontWeight:"600",marginLeft:"15px"}}>Subscriber benefits</p>
            <ul style={{fontSize:"14px",fontWeight:"400",opacity:"0.9",marginLeft:"15px"}}> 
                <li>1MG: 16% off + 5% cashback</li>
                <li>Desko : FLAT 4000 OFF on SmartDesk Pro</li>
                <li>Myntra: Flat Rs. 200 off on Rs. 1799</li>
                <li>Wonderchef: Extra 20% off</li>
                <li>Man Company: Flat Rs. 500 off on Rs. 1749</li>
            </ul>
            <button>Choose Your Plan</button>
            </div>
            <div className="OneNewspaper">
            <p style={{color:"#0D59A1",fontWeight:"700",textAlign:"center",fontSize:"20px"}} >
                MINT + WALL STREET JOURNAL DIGITAL SUBSCRIPTION</p>
            <p style={{opacity:"0.8",fontSize:"14px",textAlign:"center"}}>
                     Must have Combo for any Business Person ,Entrepreneur<br/>
                     or Top Management Personnel Save upto Rs.4000 as compared to International Pricing</p>
            
            <img className="Imgg" src={news2} alt="MyShopLogo"/>
            <p style={{fontWeight:"600",marginLeft:"15px"}}>What you Get</p>
            <ul style={{fontSize:"14px",fontWeight:"400",opacity:"0.9",marginLeft:"15px"}}> 
                <li>Unlimited access to WSJ.com & Mobile App</li>
                <li>Access to podcasts, interviews with WSJ editors & notable influencers</li>
                <li>Unlimited access to Mint Digital across any device</li>
                <li>Access to e-paper (digital replica of daily newspaper)</li>
                <li>Invites to exclusive Mint events</li>
            </ul>
            <button>Choose Your Plan</button>
            </div>
            <div className="OneNewspaper">
            </div>
            <div className="OneNewspaper">
            </div>
            <div className="OneNewspaper">
            </div>
            <div className="OneNewspaper">
            </div>
            <div className="OneNewspaper">
            </div>
            
        </div>
    )
}

export default DigitalSubs;