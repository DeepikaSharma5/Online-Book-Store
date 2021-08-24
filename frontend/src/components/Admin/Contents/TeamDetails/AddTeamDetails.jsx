import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { APP_ROUTES } from '../../../../utilities/constants/routes.constants';
import { Folder, Backspace } from 'react-bootstrap-icons';
import NavBar from '../../NavBar/NavBar';
import AppBar from '../../NavBar/AppBar';

export default function AddTeamDetails() {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [imageSelected, setimageSelected] = useState("");

    const onSubmit = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "ml_default");

        axios.post("https://api.cloudinary.com/v1_1/applicationframework2021/image/upload", formData).then((response) => {
            const image = imageSelected.name;
            const AddTeamDetails = {
                name,
                image,
                position
            }
            axios.post("http://localhost:6060/team-details/add", AddTeamDetails)
                .then(() => {
                    Swal.fire({
                        title: "Success!",
                        text: "Added Successed!",
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
                        text: "Not Success",
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
        })
    }

    function cancel() {
        window.location.href = APP_ROUTES.ADMIN_VIEW_TEAM_DETAILS;
    }

    return (
        <div>
            <AppBar />
            <NavBar />
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', position: 'relative', left: '60px' }}>
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{ fontWeight: "bold", fontSize: '250%' }}>ADD TEAM DETAILS</h1>
            </div>
            <div style={{ height: '500px', position: 'relative', left: '80px' }}>
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '80rem', margin: 'auto', padding: '30px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                    <div className="col" style={{ borderRadius: '33px', height: '450px' }}>
                        <div className="row g-0">
                            <div className="form-outline mb-4">
                                Name: <label style={{ color: 'red' }}>*</label><input type="text" id="name" className="form-control border border-dark mb-3" name="name" onChange={(e) => { setName(e.target.value) }} required />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="customFile">Add Image <label style={{ color: 'red' }}>*</label></label>
                                <input type="file" onChange={(e) => { setimageSelected(e.target.files[0]) }} className="form-control" id="customFile" required />

                            </div>
                            <div className="form-outline mb-4">
                                Position: <label style={{ color: 'red' }}>*</label><input type="text" id="position" className="form-control border border-dark mb-3" name="position" onChange={(e) => { setPosition(e.target.value) }} required />

                            </div>
                            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%", position: 'relative', left: '200px' }} onClick={cancel}><Backspace /> Cancel</button>
                                <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%", position: 'relative', right: '200px' }} onClick={onSubmit}><Folder /> Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}