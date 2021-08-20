import React, { Component } from 'react';
import PrivatePolicyHeading from "../ViewPrivatePolicy/ViewPrivatePolicyHeading";
import ViewPrivatePolicyBody from '../ViewPrivatePolicy/ViewPrivatePolicyBody';
import NavBar from '../../../NavBar/NavBar';
import AppBar from '../../../NavBar/AppBar';

class ViewPrivatePolicy extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <NavBar />
                <div>
                    <PrivatePolicyHeading />
                </div>
                <div>
                    <ViewPrivatePolicyBody />
                </div>
            </div>
        );
    }
}

export default ViewPrivatePolicy;