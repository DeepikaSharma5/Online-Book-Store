import React, { Component } from 'react';
import AddPrivatePolicyHeading from './AddPrivatePolicyHeading';
import AddPrivatePolicyBody from './AddPrivatePolicyBody';
import NavBar from '../../../NavBar/NavBar';

class AddPrivatePolicy extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <AddPrivatePolicyHeading />
                </div>
                <div>
                    <AddPrivatePolicyBody />
                </div>
            </div>
        );
    }
}

export default AddPrivatePolicy;