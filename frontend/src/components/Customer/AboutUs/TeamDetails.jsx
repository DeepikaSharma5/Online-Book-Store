import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomeTeamDetails() {

    const [TeamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:6060/team-details/view/')
            .then(res => setTeamDetails(res.data))
            .catch(error => console.log(error));
    })

    return (
        <div>
            <div className="row">
                {TeamDetails.map((TeamDetails, key) => (
                    <div className="col-sm-3 mt-5" key={key}>
                        <div className="card">
                            <div className="text-center">
                                <img className="card-img-top " style={{ width: '100%' }} src={'https://res.cloudinary.com/applicationframework2021/image/upload/v1624901540/' + TeamDetails.image} alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center text-capitalize">{TeamDetails.name}</h5>
                                <p className="card-text">
                                    <span className="fw-bold"></span>{TeamDetails.position}<br />
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}