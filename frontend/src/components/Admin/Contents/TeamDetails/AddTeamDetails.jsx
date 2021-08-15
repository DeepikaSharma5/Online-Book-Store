import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { APP_ROUTES } from '../../../../utilities/constants/routes.constants';

export default function AddTeamDetails() {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [imageSelected, setimageSelected] = useState("");

    const onSubmit = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "ml_default");

        axios.post("https://api.cloudinary.com/v1_1/spm2021/image/upload", formData).then((response) => {
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
                        text: "Saved success",
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
                        title: "Error!",
                        text: "Unable to save",
                        icon: 'error',
                        confirmButtonText: "OK",
                        type: "success"
                    })
                })
        })
    }

    return (
        <div>
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <h1 tag='div' className='display-1 pb-3 mb-3 border-bottom'>Add TeamDetails</h1>
            </div>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px' }}>
                <div className="row g-0">
                    <div className="form-outline mb-4">
                        Name: <input type="text" id="name" className="form-control border border-dark mb-3" name="name" onChange={(e) => { setName(e.target.value) }} required />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="customFile">Add Image</label>
                        <input type="file" onChange={(e) => { setimageSelected(e.target.files[0]) }} className="form-control" id="customFile" required />

                    </div>
                    <div className="form-outline mb-4">
                        position: <input type="text" id="position" className="form-control border border-dark mb-3" name="position" onChange={(e) => { setPosition(e.target.value) }} required />

                    </div>
                    <button type="submit" onClick={onSubmit} className="btn btn-primary btn-block mb-4">Save</button>
                </div>
            </div>
        </div>
    );
}