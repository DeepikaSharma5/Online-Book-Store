import React, { Component } from 'react';
import UpdateDeliveryHeading from "../UpdateDelivery/UpdateDeliveryHeading";
import UpdateDeliveryBody from '../UpdateDelivery/UpdateDeliveryBody';
import NavBar from '../../NavBar/NavBar';
import AppBar from '../../NavBar/AppBar';

class UpdateDelivery extends Component {
    render() {
        return (
            <div>
                <AppBar />
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