import React from 'react';
import './CommonHeader.css';
import {FaUserAlt} from "react-icons/fa";
import newsLogo from '../../asset/Images/chimg2.png';
import NavItems from '../NavItems/NavItems';

const commonHeader =()=>{
    return(
        <div className="CommonHeader">
        <div className="CommonHeader1">
            <p className="OtherServicesButton">Other Services</p>
            <p style={{color:"#FF6600",fontWeight:"600"}}>SAVE UPTO 70%</p>
            <FaUserAlt style={{marginRight:"10px",marginTop:"25px"}}/>
        </div>
        <div className="CommonHeader2">
            <img className="Logo" src={newsLogo} alt="NewsLogo"/>
            <ul className="ToolbarUL">
                <NavItems>HOME</NavItems>
                <NavItems>HOW IT WORKS</NavItems>
                <NavItems>ALL NEWSPAPERS</NavItems>
                <NavItems>DIGITAL SUBSCRIPTIONS</NavItems>
                <NavItems>ABOUT US</NavItems>
                <NavItems>CONTACT US</NavItems>  
            </ul>
        </div>
        </div>
    )
}

export default commonHeader;