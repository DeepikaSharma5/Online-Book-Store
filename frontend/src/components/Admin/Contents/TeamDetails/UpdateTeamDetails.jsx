import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../../utilities/constants/routes.constants';

export default function UpdateTeamDetails() {
    var TeamDetails = reactLocalStorage.getObject('TeamDetails');
    const id = TeamDetails[0];
    const [name, setName] = useState(TeamDetails[1]);
    const [images, setImage] = useState('https://api.cloudinary.com/v1_1/spm2021/image/upload/v1629040165/' + TeamDetails[2]);
    const [position, setPosition] = useState(TeamDetails[3]);

    function updateProfile(e) {
        e.preventDefault();
        const newTeamDetails = {
            name,
            images,
            position,
        }

        axios.post("http://localhost:6060/team-details/update/" + id, newTeamDetails).then(() => {

            Swal.fire({
                title: "Success!",
                text: "Update Successed!",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            }).then(okay => {
                if (okay) {
                    window.location.href =  APP_ROUTES.ADMIN_VIEW_TEAM_DETAILS;
                }
            });

        }).catch((err) => {
            Swal.fire({
                title: "error!",
                text: "Update Not Success",
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
        })
    }

    return (
        <div>
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>UPDATETEAM DETAIL</h1>
            </div>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                <div className="row g-0">
                    <div className="form-outline mb-4">
                        Name: <input type="text" id="name" className="form-control border border-dark mb-3" name="name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="customFile"> Image</label>
                        <img class="card-img-top pt-5" style={{ width: '10%' ,height:'20%'}} src={images} alt="Card image cap" />

                    </div>
                    <div className="form-outline mb-4">
                        position: <input type="text" id="position" className="form-control border border-dark mb-3" name="position" value={position} onChange={(e) => { setPosition(e.target.value) }} required />

                    </div>
                    <button type="submit" onClick={updateProfile} className="btn btn-primary btn-block mb-4"><i className="bi bi-pencil-square"></i></button>
                    <a href="/vieworg">
                        <button type="button" className="btn btn-outline-dark btn-sm">Cancel<i class="bi bi-backspace"></i></button>
                    </a>
                </div>
            </div>
        </div>
    );
}