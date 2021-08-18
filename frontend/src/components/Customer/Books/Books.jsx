import React, { Component } from 'react';
import Footer from '../Homepage/Footer/Footer';
import Header from '../Homepage/Header/Header';
import BooksBody from './BooksBody';

class Books extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <Header/>
                </div>
                <br></br>
                <div>
                    <BooksBody/>
                </div>
                <br></br><br></br>
                <div>
                    <Footer/>
                </div>
            
            </div>
        );
    }
}
 
export default Books;