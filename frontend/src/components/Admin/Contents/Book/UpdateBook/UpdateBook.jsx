import React, { Component } from 'react';
import UpdateBookBody from './UpdateBookBody';
import AppBar from '../../../NavBar/AppBar';
import NavBar from '../../../NavBar/NavBar';

class UpdateBook extends Component {
    state = {  }
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
                        <UpdateBookBody/>
                    </div>                    
                </div>
            </div>
         );
    }
}
 
export default UpdateBook;