import React, { Component } from 'react';
import ViewCategoryBody from './ViewCategoryBody'
import AppBar from '../../../NavBar/AppBar';
import NavBar from '../../../NavBar/NavBar';

class ViewCategory extends Component {
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
                        <ViewCategoryBody/>
                    </div>                    
                </div>
            </div>
         );
    }
}
 
export default ViewCategory;