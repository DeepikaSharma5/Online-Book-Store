import React, { Component } from 'react';
import ViewDeliveryHeading from "../ViewDelivery/ViewDeliveryHeading";
import ViewDeliveryBody from '../ViewDelivery/ViewDeliveryBody';
import NavBar from '../../NavBar/NavBar';

class ViewDelivery extends Component {
    render() {
        return (
            <div>
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