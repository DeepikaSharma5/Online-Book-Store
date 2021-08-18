import React, { Component } from 'react';
import UpdateTermsAndConditionsHeading from './UpdateTermsAndConditionsHeading';
import UpdateTermsAndConditionsBody from './UpdateTermsAndConditionsBody';
import NavBar from '../../../NavBar/NavBar';

class updateTermsAndConditions extends Component {
    state = {}
    render() {
        return (
            <div>
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