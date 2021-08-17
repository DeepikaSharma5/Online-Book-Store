import React, { Component } from 'react';
import PrivatePolicyHeading from './PrivatePolictHeading';
import PrivatePolicyBody from './PrivatePolicyBody';
import Header from "../Homepage/Header/Header";
import Footer from '../Homepage/Footer/Footer';

class PrivatePolicy extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <PrivatePolicyHeading />
                </div>
                <div>
                    <PrivatePolicyBody />
                </div>
                <div style={{ paddingTop: "8%" }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default PrivatePolicy;