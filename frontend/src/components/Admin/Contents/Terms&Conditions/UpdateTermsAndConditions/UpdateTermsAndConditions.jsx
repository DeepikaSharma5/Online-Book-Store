import React, { Component } from 'react';
import UpdateTermsAndConditionsHeading from './UpdateTermsAndConditionsHeading';
import UpdateTermsAndConditionsBody from './UpdateTermsAndConditionsBody';
import NavBar from '../../../NavBar/NavBar';
import AppBar from '../../../NavBar/AppBar';

class updateTermsAndConditions extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <NavBar />
                <div>
                    <UpdateTermsAndConditionsHeading />
                </div>
                <div>
                    <UpdateTermsAndConditionsBody />
                </div>
            </div>
        );
    }
}

export default updateTermsAndConditions;