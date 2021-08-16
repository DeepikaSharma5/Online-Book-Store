import React, { Component } from 'react';

class ViewDeliveryHeading extends Component {
    render() { 
        return ( 
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px'}}>
                <h4 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{fontWeight:"bold"}}>DELIVERY DETAILS</h4>
            </div>
        );
    }
}
 
export default ViewDeliveryHeading;