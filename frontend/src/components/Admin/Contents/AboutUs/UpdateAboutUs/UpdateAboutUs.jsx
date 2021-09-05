import React, { Component } from 'react';
import UpdateAboutUsBody from './UpdateAboutUsBody';
import UpdateAboutUsHeading from './UpdateAboutUsHeading';
import NavBar from '../../../NavBar/NavBar';
import Appbar from '../../../NavBar/AppBar';

class UpdateAboutUs extends Component {
    render() {
        return (
            <div>
                <Appbar />
                <NavBar />
                <div>
                    <UpdateAboutUsHeading />
                </div>
                <div>
                    <UpdateAboutUsBody />
                </div>
            </div>
        );
    }
}

export default UpdateAboutUs;