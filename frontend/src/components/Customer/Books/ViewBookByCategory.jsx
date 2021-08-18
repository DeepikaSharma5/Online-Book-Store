import React, { Component } from 'react';
import Footer from '../Homepage/Footer/Footer';
import Header from '../Homepage/Header/Header';
import ViewBookByCategoryBody from './ViewBookByCategoryBody';

class ViewBookByCategory extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <Header/>
                </div>
                <br></br>
                <div>
                    <ViewBookByCategoryBody/>
                </div>
                <br></br><br></br>
                <div>
                    <Footer/>
                </div>
            
            </div>
        );
    }
}
 
export default ViewBookByCategory;