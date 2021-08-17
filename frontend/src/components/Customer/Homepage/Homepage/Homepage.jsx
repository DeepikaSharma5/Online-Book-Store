import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomepageBody from './HomepageBody';

class Homepage extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <HomepageBody/>
                </div>
                <div>
                    <Footer/>
                </div>
            
            </div>
        );
    }
}
 
export default Homepage;