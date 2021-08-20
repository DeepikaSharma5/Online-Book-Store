import React, { Component } from 'react';
import UpdateCategoryBody from './UpdateCategoryBody';
import AppBar from '../../../NavBar/AppBar';
import NavBar from '../../../NavBar/NavBar';

class UpdateCategory extends Component {
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
                        <UpdateCategoryBody/>
                    </div>                    
                </div>
            </div>
         );
    }
}
 
export default UpdateCategory;