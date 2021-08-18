import React, { Component } from 'react';

class ContactUsHeading extends Component {
    render() { 
        return ( 
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                <h2 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{fontWeight:"bold", fontSize:"290%"}}>CONTACT US</h2>
            </div>
        );
    }
}
 
export default ContactUsHeading;