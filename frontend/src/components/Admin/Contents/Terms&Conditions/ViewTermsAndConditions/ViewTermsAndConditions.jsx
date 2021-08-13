import React, { Component } from 'react';
import ViewTermsAndConditionsHeading from "../../../../Customer/TermsAndConditions/TermsAndConditionsHeading";
import ViewTermsAndConditionsBody from '../ViewTermsAndConditions/ViewTermsAndConditionsBody';

class ViewTermsAndConditions extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <ViewTermsAndConditionsHeading/>
                </div>
                <div>
                    <ViewTermsAndConditionsBody/>
                </div>
            </div>
         );
    }
}
 
export default ViewTermsAndConditions;