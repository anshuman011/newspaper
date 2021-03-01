import React ,{Component} from 'react';
import './AllNewspapers.css';
import NavItems from '../Components/NavItems/NavItems';

class AllNewspapers extends Component{
    render(){
        return(
            <div className="AllNewspapers">
                <p style={{color:"#0D59A1",fontSize:"35px",textAlign:"center",marginTop:"50px",fontWeight:"700"}}>
                        ALL NEWSPAPERS</p>
                <ul className="AllNewspapersUL">
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">Aaj</NavItems>
                    <NavItems an toHere="/">Aaj Ka Anand</NavItems>
                    <NavItems an toHere="/">Aaj Samaj</NavItems>
                    <NavItems an toHere="/">Aamchi Mumbai</NavItems>
                    <NavItems an toHere="/">Aapla Mahanagar</NavItems>
                    <NavItems an toHere="/">Aawami News</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                    <NavItems an toHere="/">A. The Times of India</NavItems>
                </ul>
            </div>
        );
    }
}

export default AllNewspapers;