import React, { Component } from 'react';
import UpdateDeliveryHeading from "../UpdateDelivery/UpdateDeliveryHeading";
import UpdateDeliveryBody from '../UpdateDelivery/UpdateDeliveryBody';

class UpdateDelivery extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <UpdateDeliveryHeading/>
                </div>
                <div>
                    <UpdateDeliveryBody/>
                </div>
            </div>
         );
    }
}
 
export default UpdateDelivery;