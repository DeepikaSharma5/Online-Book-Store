import React, { Component } from 'react';
import ViewDeliveryHeading from "../ViewDelivery/ViewDeliveryHeading";
import ViewDeliveryBody from '../ViewDelivery/ViewDeliveryBody';
import NavBar from '../../NavBar/NavBar';
import AppBar from '../../NavBar/AppBar';

class ViewDelivery extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <NavBar />
                <div>
                    <ViewDeliveryHeading />
                </div>
                <div>
                    <ViewDeliveryBody />
                </div>
            </div>
        );
    }
}

export default ViewDelivery;