import React, { Component } from 'react';
import UpdateDeliveryHeading from "../UpdateDelivery/UpdateDeliveryHeading";
import UpdateDeliveryBody from '../UpdateDelivery/UpdateDeliveryBody';
import NavBar from '../../NavBar/NavBar';

class UpdateDelivery extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <UpdateDeliveryHeading />
                </div>
                <div>
                    <UpdateDeliveryBody />
                </div>
            </div>
        );
    }
}

export default UpdateDelivery;