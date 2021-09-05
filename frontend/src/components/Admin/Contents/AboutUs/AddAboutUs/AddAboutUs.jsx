import React, { Component } from 'react';
import AddAboutUsHeading from './AddAboutUsHeading';
import AddAboutUsBody from './AddAboutUsBody';
import NavBar from '../../../NavBar/NavBar';
import Appbar from '../../../NavBar/AppBar';

class AddPrivatePolicy extends Component {
    render() {
        return (
            <div>
                <Appbar />
                <NavBar />
                <div>
                    <AddAboutUsHeading />
                </div>
                <div>
                    <AddAboutUsBody />
                </div>
            </div>
        );
    }
}

export default AddPrivatePolicy;