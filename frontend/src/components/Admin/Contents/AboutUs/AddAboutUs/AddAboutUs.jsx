import React, { Component } from 'react';
import AddAboutUsHeading from './AddAboutUsHeading';
import AddAboutUsBody from './AddAboutUsBody';

class AddPrivatePolicy extends Component {
    render() { 
        return ( 
            <div>
                {/**navigation */}
                <div>
                    <AddAboutUsHeading/>
                </div>
                <div>
                    <AddAboutUsBody/>
                </div>
                {/**footer */}
            </div>
         );
    }
}
 
export default AddPrivatePolicy;