import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash, Pencil, PlusLg } from 'react-bootstrap-icons';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../../utilities/constants/routes.constants';
import NavBar from '../../NavBar/NavBar';
import AppBar from '../../NavBar/AppBar';

export default function ViewTeamDetails() {

    const [TeamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:6060/team-details/view/')
            .then(res => setTeamDetails(res.data))
            .catch(error => console.log(error));
    })

    function deleteTeamDetails(id) {
        axios.delete('http://localhost:6060/team-details/delete/' + id)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Deleting Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = APP_ROUTES.ADMIN_VIEW_TEAM_DETAILS;
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Deleting Not Success",
                    icon: 'error',
                    position: 'center',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
            });
    }

    function updateTeamDetails(id, name, image, position) {
        reactLocalStorage.setObject("TeamDetails", [id, name, image, position]);
        window.location.href = APP_ROUTES.ADMIN_UPDATE_TEAM_DETAILS;
    }
    return (
        <div>
            <div>
                <AppBar />
                <NavBar />
            </div>
            <div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', position: 'relative', left: '60px' }}>
                    <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{ fontWeight: "bold", fontSize: '250%' }}>VIEW TEAM DETAILS</h1>
                </div>
            </div>
            <div style={{ position: 'relative', left: '110px' }}>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '90rem', margin: 'auto', padding: '10px' }}>
                    <div>
                        <button type="button" className="btn btn-info" style={{ float: 'right', padding: '12px 28px', marginBottom: '30px' }} onClick={() => { window.location.href = APP_ROUTES.ADMIN_ADD_TEAM_DETAILS }}>
                            <PlusLg /> Add new Team Member
                        </button>
                    </div>
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
                                            <span className="fw-bold">position : </span>{TeamDetails.position}<br />
                                        </p>
                                    </div>
                                    <div className="card-footer bg-white border-0 text-end">
                                        <button type="button" onClick={() => deleteTeamDetails(TeamDetails._id)} className="btn btn-outline-danger"> <Trash /> Delete</button>{' '}
                                        <button type="button" onClick={() => updateTeamDetails(TeamDetails._id, TeamDetails.name, TeamDetails.image, TeamDetails.position)} className="btn btn-outline-success"><Pencil /> Update </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}