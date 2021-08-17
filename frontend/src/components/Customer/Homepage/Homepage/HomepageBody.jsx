import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer';
import Slideshow from './Slideshow';
import Tagline from './Tagline';

class HomepageBody extends Component {
    render() { 
        return ( 
            <div> 
                <div className="row row-cols-2" style={{width:'100%', padding:'30px 30px 30px 60px'}}>
                    <div className="col">
                        <Slideshow/>
                    </div>
                    <div className="col">
                        <Tagline/>
                    </div>
                </div>           
                <div className="row row-cols-1" style={{width:'100%', padding:'30px 30px 30px 30px'}}>
                    <div className="col">
                        <CategoryContainer/>
                    </div>
                    <div className="col">
                        <CategoryContainer/>
                    </div>
                </div>
            </div>
        );
    } 
}

export default HomepageBody;