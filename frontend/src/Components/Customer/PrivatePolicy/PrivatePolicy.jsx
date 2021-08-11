import React, { Component } from 'react';
import PrivatePolicyHeading from './PrivatePolictHeading';
import PrivatePolicyBody from './PrivatePolicyBody';

class PrivatePolicy extends Component {
    render() { 
        return ( 
            <div>
                {/**navigation */}
                <div>
                    <PrivatePolicyHeading/>
                </div>
                <div>
                    <PrivatePolicyBody/>
                </div>
                {/**footer */}
            </div>
         );
    }
}
 
export default PrivatePolicy;