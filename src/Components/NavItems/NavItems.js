import React from "react";
import {Link} from 'react-router-dom';
import './NavItems.css';
import classNames from 'classnames';

import { Icon } from 'react-icons-kit'
import {ic_play_arrow} from 'react-icons-kit/md/ic_play_arrow'

const navItems=(props)=>{
    let details=<Link /* onClick={props.clicked} */  to={props.toHere}>{props.children}</Link>
    let attachedClass="NavItems"
    if(props.cf){
        attachedClass="NavItemsForCF"
    }
    if(props.an){
        attachedClass="NavItemsForAN";
        details=(
        <div>
        <Icon style={{marginRight:"5px",opacity:"1",color:"black"}} size={20} icon={ic_play_arrow} />
        <Link /* onClick={props.clicked} */  to={props.toHere}>{props.children}</Link>
        </div>
        )
        
    }
    return(
            <li className={attachedClass}>
                {details}
                <span className="Tooltiptext">{props.children}</span>
            </li>
        
    )
}

export default navItems;
