import React, { Component } from 'react';
import Footer from '../Homepage/Footer/Footer';
import Header from '../Homepage/Header/Header';
import SearchBody from './SearchBody';

class SearchBooks extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <Header/>
                </div>
                <br></br>
                <div>
                    <SearchBody/>
                </div>
                <br></br><br></br>
                <div>
                    <Footer/>
                </div>
            
            </div>
        );
    }
}
 
export default SearchBooks;