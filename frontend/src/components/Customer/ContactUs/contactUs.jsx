import React, { Component } from 'react';
import ContactUsBody from './contactUsBody';
import ContactUsHeading from './contactUsHeading';
import Header from "../Homepage/Header/Header";
import Footer from '../Homepage/Footer/Footer';

class ContactUs extends Component {
    render() { 
        return ( 
            <div >
                <Header/>
                <div>
                    <ContactUsHeading/>
                </div>
                <div>
                    <ContactUsBody/>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default ContactUs;