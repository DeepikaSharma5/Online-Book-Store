import React, { Component } from 'react';
import AddTermsAndConditonsHeading from './AddTermsAndConditionsHeading';
import AddTermsAndConditonsBody from './AddTermsAndConditionsBody';

class AddTermsAndConditons extends Component {
    render() { 
        return ( 
            <div>
                {/**navigation */}
                <div>
                    <AddTermsAndConditonsHeading/>
                </div>
                <div>
                    <AddTermsAndConditonsBody/>
                </div>
                {/**footer */}
            </div>
         );
    }
}
 
export default AddTermsAndConditons;