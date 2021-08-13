import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';

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
        

        function cancel () {
            window.location.href = "/admin-view-private-policy" ;
        }

        function reset (){
            setDetails(" ");
        }


    return (
        <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
            <div className="col" style={{ borderRadius: '33px', height: '590px' }}>
                <form id="UpdateForm" style={{ paddingTop: "70px" }}>
                    <div className="form-group row ">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "170%", fontWeight: "bold", height: '150px' }}>Heading: <label style={{ color: 'red' }}>*</label></label>
                        <div className="col-sm-10">
                            <input type="text" id="heading" className="form-control form-control-lg" name="heading" value={heading} onChange={(e) => { setHeading(e.target.value) }} required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "170%", fontWeight: "bold", height: '200px' }}>Details:<label style={{ color: 'red' }}>*</label></label>
                        <div className="col-sm-10">
                            <textarea className="form-control form-control-lg" id="details" rows="4" name="details" value={details} onChange={(e) => { setDetails(e.target.value) }} required />
                        </div>
                    </div>
                    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                        <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={cancel}><Backspace /> Cancel</button>
                        <button type="reset" className="btn btn-outline-primary" style={{ float: 'center',padding: '12px 68px', marginBottom:'30px', fontWeight:'bold', fontSize:"130%"  }} onClick={reset}><XCircle/> Clear</button>
                        <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={updatePrivatePolicy}><Folder /> Save</button>
                    </div>
                </form>
            </div>
        </div>
    );

}
