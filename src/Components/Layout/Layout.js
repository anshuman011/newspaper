import React,{Component} from 'react';
import './Layout.css';
import {Route,Router} from 'react-router-dom';
import CommonHeader from '../CommonHeader/CommonHeader';
import HowItWorks from '../HowItWorks';
import AllNewspapers from '../AllNewspapers';
import DigitalSubs from '../DigitalSubscription';
import AboutUs from '../AboutUs';
import AllNewspapersDetails from '../../AllNewspapersDetails';
import CommonFooter from '../CommonFooter';

class Layout extends Component{
    render(){
        return(
            <div className="Layout">
                <Route path="/" component={CommonHeader}/>
                <Route path="/how_it_works" component={HowItWorks}/>
                <Route path="/all_newspapers" component={AllNewspapers}/>
                <Route path="/digital_subs" component={DigitalSubs}/>
                <Route path="/about_us" component={AboutUs}/>
                     <Route path={["/newspaper/the-times-of-india", "/newspaper/AAJ", 
                                    "/newspaper/AAJ-KA-ANAND","/newspaper/aaj-samaj"]} 
                            component={AllNewspapersDetails} />
                <Route path="/" component={CommonFooter}/>
            </div>
        )
    }
}

export default Layout;