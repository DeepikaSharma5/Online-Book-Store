import React, { Component } from 'react';
import UpdateTermsAndConditionsHeading from './UpdateTermsAndConditionsHeading';
import UpdateTermsAndConditionsBody from './UpdateTermsAndConditionsBody';

class updateTermsAndConditions extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                    <UpdateTermsAndConditionsHeading/>
                </div>
                <div>
                    <UpdateTermsAndConditionsBody/>
                </div>
            </div>
         );
    }
}
 
export default updateTermsAndConditions;