import React, { Component } from 'react';
import AddBookBody from './AddBookBody';
import AppBar from '../../../NavBar/AppBar';
import NavBar from '../../../NavBar/NavBar';

class AddBook extends Component {
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
                        <AddBookBody/>
                    </div>                    
                </div>
            </div>
         );
    }
}
 
export default AddBook;