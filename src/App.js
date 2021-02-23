import React, { Component } from 'react';
import './App.css';

import Layout from './Components/Layout/Layout';
import CommonHeader from './Components/CommonHeader/CommonHeader';
import {Route} from 'react-router-dom';
import HowItWorks from './Components/HowItWorks';
import CommonFooter from './Components/CommonFooter';
import AboutUs from './Components/AboutUs';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Route path="/" component={CommonHeader}/>
        {/* <Route path="/" component={Layout}/> */}
        <Route path="/about_us" component={AboutUs}/>
        <Route path="/how_it_works" component={HowItWorks}/>
        <Route path="/" component={CommonFooter}/>
      </div>
    )
  }
}

export default App;

//react-router-dom,react-icons,