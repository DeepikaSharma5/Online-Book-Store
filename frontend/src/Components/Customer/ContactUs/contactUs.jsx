import React, { Component } from 'react';
import ContactUsBody from './contactUsBody';
import ContactUsHeading from './contactUsHeading';

class ContactUs extends Component {
    render() { 
        return ( 
            <div >
                {/**navigation */}
                <div style={{background:"#008080"}}>
                    <ContactUsHeading/>
                </div>
                <div style={{background:"#008080"}}>
                    <ContactUsBody/>
                </div>
                {/**footer */}
            </div>
        );
    }
}
 
export default ContactUs;