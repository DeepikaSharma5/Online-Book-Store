import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 

export default class Slideshow extends Component {  
    render() {
        return (
            <div>
                <div className='container-fluid' style={{margin:'auto'}} >  
                    <Carousel interval={4000} keyboard={false} pauseOnHover={true}>  
                        <Carousel.Item style={{'height':"400px"}}  >  
                            <img style={{'height':"400px"}}  
                            className="d-block w-100"  
                            src={'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/03/content_Murakami_Collage.jpg?auto=format&q=60&fit=max&w=930'}  />  
                            <Carousel.Caption style={{'backgroundColor':"#FCD752", 'color':'black', 'height':'auto'}}>  
                                <h4> Murakami Collection </h4>  
                            </Carousel.Caption>  
                        </Carousel.Item  >  
                        <Carousel.Item style={{'height':"400px"}}>  
                            <img style={{'height':"400px"}}  
                            className="d-block w-100"  
                            src={'https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg'}    />  
                            <Carousel.Caption style={{'backgroundColor':"#FCD752", 'color':'black', 'height':'auto'}}> 
                                <h4> Expand your library</h4>  
                            </Carousel.Caption> 
                        </Carousel.Item>                         
                        <Carousel.Item style={{'height':"400px"}}>  
                            <img style={{'height':"400px"}}  
                            className="d-block w-100"  
                            src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summerbooks-1620268150.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'}    />  
                            <Carousel.Caption style={{'backgroundColor':"#FCD752", 'color':'black', 'height':'auto'}}> 
                                <h4> Summer Sale is Coming Soon</h4>  
                            </Carousel.Caption> 
                        </Carousel.Item>  
                    </Carousel>  
                </div>    
            </div>
        )
    }
}