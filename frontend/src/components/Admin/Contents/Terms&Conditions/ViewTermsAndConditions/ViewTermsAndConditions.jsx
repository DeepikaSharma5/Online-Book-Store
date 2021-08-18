import React, { Component } from 'react';
import ViewTermsAndConditionsHeading from '../ViewTermsAndConditions/ViewTermsAndConditionsHeading';
import ViewTermsAndConditionsBody from '../ViewTermsAndConditions/ViewTermsAndConditionsBody';
import NavBar from '../../../NavBar/NavBar';

class ViewTermsAndConditions extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <ViewTermsAndConditionsHeading />
                </div>
                <div>
                    <ViewTermsAndConditionsBody />
                </div>
            </div>
        );
    }
}

export default ViewTermsAndConditions;