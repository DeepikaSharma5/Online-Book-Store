import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../../utilities/constants/routes.constants';

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
                        window.location.href = APP_ROUTES.ADMIN_VIEW_PRIVATE_POLICY;
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


    function cancel() {
        window.location.href = APP_ROUTES.ADMIN_VIEW_PRIVATE_POLICY;
    }

    function reset() {
        setDetails(" ");
    }


    return (
        <div style={{ position: 'relative', left: '110px', height:'1100px' }}>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                <div className="col" style={{ borderRadius: '33px', height: '1000px' }}>
                    <form id="UpdateForm" style={{ paddingTop: "70px" }}>
                        <div className="form-group row ">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '150%' }}>Order ID: </label>
                            <div className="col-sm-10">
                                <h4>{heading}</h4>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '150%' }}>Address 1:</label>
                            <div className="col-sm-10">
                                <h4>{details}</h4>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '150%' }}>Address 2:</label>
                            <div className="col-sm-10">
                                <h4>{details}</h4>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '150%' }}>Address 3:</label>
                            <div className="col-sm-10">
                                <h4>{details}</h4>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '150%' }}>Phone Number:</label>
                            <div className="col-sm-10">
                                <h4>{details}</h4>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1" style={{ fontSize: "130%", fontWeight: "bold", height: '50px' }}>Order Delivery Status: </label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Pending</option>
                                <option>Processing</option>
                                <option>Shipped</option>
                                <option>Delivered</option>
                            </select>
                        </div>
                        <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                            <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={cancel}><Backspace /> Cancel</button>
                            <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={updatePrivatePolicy}><Folder /> Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}
