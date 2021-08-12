import React, { Component } from 'react';
import PrivatePolictHeading from "../../../../Customer/PrivatePolicy/PrivatePolictHeading";
import ViewPrivatePolicyBody from '../ViewPrivatePolicy/ViewPrivatePolicyBody';

class ViewPrivatePolicy extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <PrivatePolictHeading/>
                </div>
                <div>
                    <ViewPrivatePolicyBody/>
                </div>
            </div>
         );
    }
}
 
export default ViewPrivatePolicy;