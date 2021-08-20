import React, { Component } from 'react';

export default class Tagline extends Component {  
    render() {
        return (
            <div className="row" style={{margin:'auto', padding:'auto'}}>
                <div className="row">
                    <div>
                        <br></br><br></br><br></br>
                        <div class="card p-3 text-center ">
                        <blockquote class="blockquote mb-0 card-body">
                        <h1> <i> “Read the books and make your life better.” </i></h1>
                        <br></br>
                        <footer class="blockquote-footer" style={{'fontSize':'25px'}}>
                            <small class="text-muted">
                             BookLab
                            </small>
                        </footer>
                        </blockquote>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}