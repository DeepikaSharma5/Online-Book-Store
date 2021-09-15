import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import AppBar from '../../NavBar/AppBar';
import ProductDashboardBody from './ProductDashboardBody';

class ProductDashboard extends Component {
    render() { 
        return ( 
            <div>
                <div className="row">
                    <AppBar/>      
                </div>
                <div className="row">
                    <div className="col">
                        <NavBar/>
                    </div>
                    <div className="col-10">
                        <br></br><br></br>
                        <ProductDashboardBody/>
                    </div>                    
                </div>
            </div>
         );
    }
}
 
export default ProductDashboard;