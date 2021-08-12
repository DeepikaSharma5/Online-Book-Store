import React, { Component } from 'react';
import AddPrivatePolicyHeading from './AddPrivatePolicyHeading';
import AddPrivatePolicyBody from './AddPrivatePolicyBody';

class AddPrivatePolicy extends Component {
    render() { 
        return ( 
            <div>
                {/**navigation */}
                <div>
                    <AddPrivatePolicyHeading/>
                </div>
                <div>
                    <AddPrivatePolicyBody/>
                </div>
                {/**footer */}
            </div>
         );
    }
}
 
export default AddPrivatePolicy;