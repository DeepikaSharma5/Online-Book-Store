import React, { Component } from 'react';
import ViewAboutUsHeading from './ViewAboutUsHeading';
import ViewAboutUsBody from './ViewAboutUsBody';

class ViewAboutUs extends Component {
    render() { 
        return ( 
            <div>
                {/**navigation */}
                <div>
                    <ViewAboutUsHeading/>
                </div>
                <div>
                    <ViewAboutUsBody/>
                </div>
                {/**footer */}
            </div>
         );
    }
}
 
export default ViewAboutUs;