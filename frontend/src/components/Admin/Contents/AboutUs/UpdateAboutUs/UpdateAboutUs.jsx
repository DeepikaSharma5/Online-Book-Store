import React, { Component } from 'react';
import UpdateAboutUsBody from './UpdateAboutUsBody';
import UpdateAboutUsHeading from './UpdateAboutUsHeading';
import NavBar from '../../../NavBar/NavBar';

class UpdateAboutUs extends Component {
    render() {
        return (
            <div>
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