import React, { Component } from 'react';
import AddBookBody from './AddBookBody';

class AddBook extends Component {
    render() { 
        return ( 
            <div>
                {/**navigation */}
                <div>
                    <AddBookBody/>
                </div>
                {/**footer */}
            </div>
         );
    }
}
 
export default AddBook;