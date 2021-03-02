import React from 'react';
import './CommonHeader.css';
import { Icon } from 'react-icons-kit'
import {userCircle} from 'react-icons-kit/fa/userCircle'
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import newsLogo from '../../asset/Images/chimg2.png';
import NavItems from '../NavItems/NavItems';

const commonHeader =()=>{

    const DivForIcon = styled.div`color:white;margin-top:15px;:hover {color: #30A600;cursor: pointer;}`

    return(
        <div className="CommonHeader">
        <div className="CommonHeader1">
            <p className="OtherServicesButton">Other Services</p>
            <p style={{color:"#FF6600",fontWeight:"600"}}>SAVE UPTO 70%</p>
            <DivForIcon >
            <Icon size={26} icon={userCircle} />
            </DivForIcon>
        </div>
        <div className="CommonHeader2">
            <img className="Logo" src={newsLogo} alt="NewsLogo" />
            <ul className="ToolbarUL">
                <NavItems toHere="/">HOME</NavItems>
                <NavItems toHere="/how_it_works">HOW IT WORKS</NavItems>
                <NavItems toHere="/all_newspapers">ALL NEWSPAPERS</NavItems>
                <NavItems toHere="/digital_subs">DIGITAL SUBSCRIPTIONS</NavItems>
                <NavItems toHere="about_us">ABOUT US</NavItems>
                <NavItems toHere="/">CONTACT US</NavItems>  
            </ul>
        </div>
        </div>
    )
}


export default commonHeader;

// console.log(window.pageYOffset)
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
// </script>
// <div id="navbar">
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
// </div>