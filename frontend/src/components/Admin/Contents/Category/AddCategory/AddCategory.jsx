import React, { Component } from 'react';
import AddCategoryBody from './AddCategoryBody';

class AddCategory extends Component {
    render() { 
        return ( 
            <div>
                {/**navigation */}
                <div>
                    <AddCategoryBody/>
                </div>
                {/**footer */}
            </div>
         );
    }
}
 
export default AddCategory;