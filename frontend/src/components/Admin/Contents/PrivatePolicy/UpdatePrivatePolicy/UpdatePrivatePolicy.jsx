import React, { Component } from 'react';
import UpdatePrivatePolicyHeading from './UpdatePrivatePolicyHeading';
import UpdatePrivatePolicyBody from './UpdatePrivatePolicyBody';
import NavBar from '../../../NavBar/NavBar';
import AppBar from '../../../NavBar/AppBar';

class UpdatePrivatePolicy extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <NavBar />
                <div>
                    <UpdatePrivatePolicyHeading />
                </div>
                <div>
                    <UpdatePrivatePolicyBody />
                </div>
            </div>
        );
    }
}

export default UpdatePrivatePolicy;