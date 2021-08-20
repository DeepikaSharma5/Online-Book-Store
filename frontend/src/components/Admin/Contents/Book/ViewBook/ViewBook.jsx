import React, { Component } from 'react';
import ViewBookBody from './ViewBookBody';
import AppBar from '../../../NavBar/AppBar';
import NavBar from '../../../NavBar/NavBar';

class ViewBook extends Component {
    render() { 
        return ( 
            <div>
                <div className="row">
                    <AppBar/>      
                </div>
                <div className="row">
                    <div className="col">
                        <NavBar/>
                    </div>
                    <div className="col-10">
                        <br></br><br></br>
                        <ViewBookBody/>
                    </div>                    
                </div>                
            </div>
         );
    }
}
 
export default ViewBook;