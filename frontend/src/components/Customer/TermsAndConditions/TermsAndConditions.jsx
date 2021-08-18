import React, { Component } from 'react';
import TermsAndConditionsHeading from './TermsAndConditionsHeading';
import TermsAndConditionsBody from './TermsAndConditionsBody';
import Header from "../Homepage/Header/Header";
import Footer from '../Homepage/Footer/Footer';

class TermsAndConditions extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <TermsAndConditionsHeading />
                </div>
                <div>
                    <TermsAndConditionsBody />
                </div>
                <div style={{ paddingTop: "8%" }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default TermsAndConditions;