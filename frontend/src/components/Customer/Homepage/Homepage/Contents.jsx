import React, { Component } from 'react';

export default class Contents extends Component {  
    render() {
        return (
            <div className='container' >
                <div class="card-columns" >
                    <div class="card">
                        <img class="card-img-top" src="https://cdn-japantimes.com/wp-content/uploads/2019/03/n-haruki-a-20190323_v0.2.jpg" alt="Card image cap"/>
                        <div class="card-body">
                            <div class="card p-3 text-right">
                            <blockquote class="blockquote mb-0">
                            <p>“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”</p>
                            <footer class="blockquote-footer">
                                <small class="text-muted">
                                Haruki Murakami
                                </small>
                            </footer>
                            </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="card p-3">
                        <blockquote class="blockquote mb-0 card-body">
                        <p>“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</p>
                        <footer class="blockquote-footer">
                            <small class="text-muted">
                            George R.R. Martin
                            </small>
                        </footer>
                        </blockquote>
                    </div>                  
                    <div class="card text-center">
                        <div class="card-body">
                        <h5 class="card-title"> Make sure to visit your website daily </h5>
                        <p class="card-text">  We are continously expanding our library of books for you! </p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://www.ft.com/__origami/service/image/v2/images/raw/http://prod-upp-image-read.ft.com/98b79a4e-fefb-11e8-aebf-99e208d3e521?source=next&fit=scale-down&quality=highest&width=1067" alt="Card image cap"/>
                    </div>  
                    <div class="card bg-dark text-white text-center p-3">
                        <blockquote class="blockquote mb-0">
                        <p>"30 percent of the international online population read books “every day or most days”</p>
                        <footer class="blockquote-footer">
                            <small>
                            Nuremberg, March 23, 2017
                            </small>
                        </footer>
                        </blockquote>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="card p-3 text-right bg-light">
                            <blockquote class="blockquote mb-0">
                            <p>“A book must be the axe for the frozen sea within us.”</p>
                            <footer class="blockquote-footer">
                                <small class="text-muted">
                                Franz Kafka
                                </small>
                            </footer>
                            </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://cdn-prod.medicalnewstoday.com/content/images/articles/313/313429/woman-reading-or-studying.jpg" alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title">Five ways reading can improve health and well-being </h4>
                            <p class="card-text">1) Reading can reduce stress</p>
                            <p class="card-text">2) Reading can slow cognitive decline</p>
                            <p class="card-text">3) Reading can improve sleep</p>
                            <p class="card-text">4) Reading can enhance social skills</p>
                            <p class="card-text">5) Reading may boost intelligence</p>
                        </div>
                    </div> 
                    
                </div>
            </div>          
        )
    }
}