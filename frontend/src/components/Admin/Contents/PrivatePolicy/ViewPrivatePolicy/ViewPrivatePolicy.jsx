import React, { Component } from 'react';
import PrivatePolicyHeading from "../ViewPrivatePolicy/ViewPrivatePolicyHeading";
import ViewPrivatePolicyBody from '../ViewPrivatePolicy/ViewPrivatePolicyBody';
import NavBar from '../../../NavBar/NavBar';

class ViewPrivatePolicy extends Component {
    render() {
        return (
            <div>
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