import React, { Component } from 'react';

class ViewAboutUsHeading extends Component {
    render() { 
        return ( 
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', position:'relative', left:'50px', marginBottom:'-20px'}}>
                <h4 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{fontWeight:"bold", fontSize:'250%'}}>ABOUT US</h4>
            </div>
        );
    }
}
 
export default ViewAboutUsHeading;