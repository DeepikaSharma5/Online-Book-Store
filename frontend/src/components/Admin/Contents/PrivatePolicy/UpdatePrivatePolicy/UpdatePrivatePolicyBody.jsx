import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function UpdatePrivatePolicyBody() {
    var PrivatePolicy = reactLocalStorage.getObject('PrivatePolicy');
    const id = PrivatePolicy[0];
    const [heading, setHeading] = useState(PrivatePolicy[1]);
    const [details, setDetails] = useState(PrivatePolicy[2]);

    function updatePrivatePolicy(e) {
        e.preventDefault();
        const newUpdatePrivtePolicy = {
            heading,
            details,
        }

        axios.post("http://localhost:6060/private-policy/update/" + id, newUpdatePrivtePolicy)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Private policy has been updated',
                    showConfirmButton: false,
                    timer: 2000
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/admin-view-private-policy";
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
        <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px', borderColor: 'black' }}>
            <div className="col" style={{ borderRadius: '33px', height: '690px' }}>
                <form id="UpdateForm">
                    <div class="form-group row ">
                        <label htmlFor="inputName" class="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "170%", fontWeight: "bold", height: '150px' }}>Heading: <label style={{ color: 'red' }}>*</label></label>
                        <div className="col-sm-10">
                            <input type="text" id="heading" className="form-control form-control-lg" name="heading" value={heading} onChange={(e) => {setHeading(e.target.value)}} required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label htmlFor="inputSubject" class="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "170%", fontWeight: "bold", height: '200px' }}>Details:<label style={{ color: 'red' }}>*</label></label>
                        <div className="col-sm-10">
                            <textarea className="form-control form-control-lg" id="details" rows="4" name="details" value={details} onChange={(e) => {setDetails(e.target.value)}} required />
                        </div>
                    </div>
                    <center><button type="submit" onClick={updatePrivatePolicy} className="btn btn-primary btn-block mb-4 btn-lg"  style={{ width: "30%", height: "60px" }}>Send</button></center>
                </form>
            </div>
        </div>
    );

}
