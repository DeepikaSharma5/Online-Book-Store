import React, { Component } from 'react';

class MyDeliveriesHeading extends Component {
    render() { 
        return ( 
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                <h2 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{fontWeight:"bold", fontSize:"270%"}}>MY DELIVERIES</h2>
            </div>
        );
    }
}
 
export default MyDeliveriesHeading;