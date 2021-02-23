import React from "react";
import {Link} from 'react-router-dom';
import './NavItems.css';
import classNames from 'classnames';

const navItems=(props)=>{
    let attachedClass="NavItems"
    if(props.cf){
        attachedClass="NavItemsForCF"
    }
    return(
            <li className={attachedClass}>
               {/*  <Link onClick={props.clicked}  
                      to={props.toHere} 
                      className={props.active?classes.active : null}> */}
                      <a >{props.children}</a>
                {/* </Link> */}
            </li>
        
    )
}

export default navItems;
