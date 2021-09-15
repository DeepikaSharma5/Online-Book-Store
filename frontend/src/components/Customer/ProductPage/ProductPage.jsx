import React, { Component } from 'react';
import Footer from '../Homepage/Footer/Footer';
import Header from '../Homepage/Header/Header';
import ProductPageBody from './ProductPageBody';

class ProductPage extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <Header/>
                </div>
                <br></br>
                <div>
                    <ProductPageBody/>
                </div>
                <br></br><br></br>
                <div>
                    <Footer/>
                </div>
            
            </div>
        );
    }
}
 
export default ProductPage;