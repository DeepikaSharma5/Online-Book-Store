import React, { Component } from 'react';
import AddTermsAndConditonsHeading from './AddTermsAndConditionsHeading';
import AddTermsAndConditonsBody from './AddTermsAndConditionsBody';
import NavBar from '../../../NavBar/NavBar';

class AddTermsAndConditons extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <AddTermsAndConditonsHeading />
                </div>
                <div>
                    <AddTermsAndConditonsBody />
                </div>
            </div>
        );
    }
}

export default AddTermsAndConditons;