import React, { Component } from 'react';
import ViewAboutUsHeading from './ViewAboutUsHeading';
import ViewAboutUsBody from './ViewAboutUsBody';
import NavBar from '../../../NavBar/NavBar';
import Appbar from '../../../NavBar/AppBar';

class ViewAboutUs extends Component {
    render() {
        return (
            <div>
                <Appbar />
                <NavBar />
                <div>
                    <ViewAboutUsHeading />
                </div>
                <div>
                    <ViewAboutUsBody />
                </div>
            </div>
        );
    }
}

export default ViewAboutUs;