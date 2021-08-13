import React, { Component } from 'react';
import TermsAndConditionsHeading from './TermsAndConditionsHeading';
import TermsAndConditionsBody from './TermsAndConditionsBody';

class TermsAndConditions extends Component {
    render() { 
        return ( 
            <div>
                {/**navigation */}
                <div>
                    <TermsAndConditionsHeading/>
                </div>
                <div>
                    <TermsAndConditionsBody/>
                </div>
                {/**footer */}
            </div>
         );
    }
}
 
export default TermsAndConditions;