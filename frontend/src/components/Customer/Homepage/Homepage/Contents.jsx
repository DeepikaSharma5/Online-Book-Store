import React, { Component } from 'react';

export default class Contents extends Component {  
    render() {
        return (
            <div className='container' >
                <div className="card-columns" >
                    <div className="card">
                        <img className="card-img-top" src="https://cdn-japantimes.com/wp-content/uploads/2019/03/n-haruki-a-20190323_v0.2.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <div className="card p-3 text-right">
                            <blockquote className="blockquote mb-0">
                            <p>“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”</p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                Haruki Murakami
                                </small>
                            </footer>
                            </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="card p-3">
                        <blockquote className="blockquote mb-0 card-body">
                        <p>“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            George R.R. Martin
                            </small>
                        </footer>
                        </blockquote>
                    </div>                  
                    <div className="card text-center">
                        <div className="card-body">
                        <h5 className="card-title"> Make sure to visit your website daily </h5>
                        <p className="card-text">  We are continously expanding our library of books for you! </p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://www.ft.com/__origami/service/image/v2/images/raw/http://prod-upp-image-read.ft.com/98b79a4e-fefb-11e8-aebf-99e208d3e521?source=next&fit=scale-down&quality=highest&width=1067" alt="Card image cap"/>
                    </div>  
                    <div className="card bg-dark text-white text-center p-3">
                        <blockquote className="blockquote mb-0">
                        <p>"30 percent of the international online population read books “every day or most days”</p>
                        <footer className="blockquote-footer">
                            <small>
                            Nuremberg, March 23, 2017
                            </small>
                        </footer>
                        </blockquote>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card p-3 text-right bg-light">
                            <blockquote className="blockquote mb-0">
                            <p>“A book must be the axe for the frozen sea within us.”</p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                Franz Kafka
                                </small>
                            </footer>
                            </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/313/313429/woman-reading-or-studying.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Five ways reading can improve health and well-being </h4>
                            <p className="card-text">1) Reading can reduce stress</p>
                            <p className="card-text">2) Reading can slow cognitive decline</p>
                            <p className="card-text">3) Reading can improve sleep</p>
                            <p className="card-text">4) Reading can enhance social skills</p>
                            <p className="card-text">5) Reading may boost intelligence</p>
                        </div>
                    </div> 
                    
                </div>
            </div>          
        )
    }
}