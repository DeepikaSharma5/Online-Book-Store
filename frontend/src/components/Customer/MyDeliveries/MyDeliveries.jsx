import React, { Component } from 'react';
import MyDeliveriesHeading from "../MyDeliveries/MyDeliveriesHeading";
import MyDeliveriesBody from '../MyDeliveries/MyDeliveriesBody';
import Header from "../Homepage/Header/Header";
import Footer from '../Homepage/Footer/Footer';

class MyDeliveries extends Component {
    render() { 
        return ( 
            <div>
                <Header/>
                <div>
                    <MyDeliveriesHeading/>
                </div>
                <div>
                    <MyDeliveriesBody/>
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default MyDeliveries;