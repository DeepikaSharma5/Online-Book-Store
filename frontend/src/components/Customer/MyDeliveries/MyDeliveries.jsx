import React, { Component } from 'react';
import MyDeliveriesHeading from "../MyDeliveries/MyDeliveriesHeading";
import MyDeliveriesBody from '../MyDeliveries/MyDeliveriesBody';

class MyDeliveries extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <MyDeliveriesHeading/>
                </div>
                <div>
                    <MyDeliveriesBody/>
                </div>
            </div>
         );
    }
}
 
export default MyDeliveries;