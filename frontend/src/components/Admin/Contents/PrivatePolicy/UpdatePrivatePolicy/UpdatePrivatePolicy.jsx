import React, { Component } from 'react';
import UpdatePrivatePolicyHeading from './UpdatePrivatePolicyHeading';
import UpdatePrivatePolicyBody from './UpdatePrivatePolicyBody';

class UpdatePrivatePolicy extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                    <UpdatePrivatePolicyHeading/>
                </div>
                <div>
                    <UpdatePrivatePolicyBody/>
                </div>
            </div>
         );
    }
}
 
export default UpdatePrivatePolicy;