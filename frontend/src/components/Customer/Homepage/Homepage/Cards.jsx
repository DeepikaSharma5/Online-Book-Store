import React, { Component } from 'react';

export default class Cards extends Component {  
    render() {
        return (
            <div className="container row row-cols-3 shadow-lg rounded" 
                    style={{width:'100%', padding:'30px 30px 30px 30px', margin:'auto', 'backgroundColor':'#8a8a8a', 'color':'white'}}>
                <div className="col">
                        <ul className="nav flex-row">
                            <li className="nav-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-truck" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                </svg>
                            </li>
                            <li className="nav-item">
                               <p> &emsp; </p>
                            </li>
                            <li className="nav-item">                                
                                <h3> Islandwide Delivery</h3>
                            </li>
                        </ul>
                </div>                
                <div className="col">
                        <ul className="nav flex-row">
                            <li className="nav-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-credit-card" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                                </svg>
                            </li>
                            <li className="nav-item">
                               <p> &emsp; </p>
                            </li>
                            <li className="nav-item">                                
                                <h3> 100% Secure Payment </h3>
                            </li>
                        </ul>
                </div>
                <div className="col">
                        <ul className="nav flex-row">
                            <li className="nav-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-book" viewBox="0 0 16 16">
                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                </svg>
                            </li>
                            <li className="nav-item">
                               <p> &emsp; </p>
                            </li>
                            <li className="nav-item">                                
                                <h3> Great Collection of Books </h3>
                            </li>
                        </ul>
                </div>
            </div>          
        )
    }
}