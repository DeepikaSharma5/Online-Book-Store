import React, { Component } from 'react';
import ViewAboutUsHeading from './ViewAboutUsHeading';
import ViewAboutUsBody from './ViewAboutUsBody';
import NavBar from '../../../NavBar/NavBar';

class ViewAboutUs extends Component {
    render() { 
        return ( 
            <div>
                <NavBar />
                <div>
                    <ViewAboutUsHeading/>
                </div>
                <div>
                    <ViewAboutUsBody/>
                </div>
            </div>
         );
    }
}
 
export default ViewAboutUs;