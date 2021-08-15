import React, { Component } from 'react';
import UpdateAboutUsBody from './UpdateAboutUsBody';
import UpdateAboutUsHeading from './UpdateAboutUsHeading';

class UpdateAboutUs extends Component {
    render() { 
        return ( 
            <div>
                {/**navigation */}
                <div>
                    <UpdateAboutUsHeading/>
                </div>
                <div>
                    <UpdateAboutUsBody/>
                </div>
                {/**footer */}
            </div>
         );
    }
}
 
export default UpdateAboutUs;