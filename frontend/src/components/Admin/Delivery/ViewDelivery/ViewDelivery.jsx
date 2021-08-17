import React, { Component } from 'react';
import ViewDeliveryHeading from "../ViewDelivery/ViewDeliveryHeading";
import ViewDeliveryBody from '../ViewDelivery/ViewDeliveryBody';

class ViewDelivery extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <ViewDeliveryHeading/>
                </div>
                <div>
                    <ViewDeliveryBody/>
                </div>
            </div>
         );
    }
}
 
export default ViewDelivery;