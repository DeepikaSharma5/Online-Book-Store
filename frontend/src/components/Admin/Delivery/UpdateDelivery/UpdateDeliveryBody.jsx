import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../../utilities/constants/routes.constants';

export default function UpdateDeliveryBody() {
    var UpdateStatus = reactLocalStorage.getObject('UpdateStatus');
    const id = UpdateStatus[0];
    const [address1, setAddress1] = useState(UpdateStatus[1]);
    const [address2, setAddress2] = useState(UpdateStatus[2]);
    const [address3, setAddress3] = useState(UpdateStatus[3]);
    const [phoneNumber, setPhoneNumber] = useState(UpdateStatus[4]);
    const [statuss, setStatuss] = useState(UpdateStatus[5]);

    function updateStatus(e) {
        e.preventDefault();
        const newUpdateStatus = {
            address1,
            address2,
            address3,
            phoneNumber,
            statuss,
        }

        axios.post("http://localhost:6060/delivery-status/update/" + id, newUpdateStatus)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Delivery status has been updated',
                    showConfirmButton: false,
                    timer: 2000
                }).then(okay => {
                    if (okay) {
                        window.location.href = APP_ROUTES.ADMIN_VIEW_DELIVERY;
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
        window.location.href = APP_ROUTES.ADMIN_VIEW_DELIVERY;
    }

    function reset() {
        setStatuss("Pending");
    }


    return (
        <div style={{ position: 'relative', left: '90px', height: '550px' }}>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '50rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                <div className="col" style={{ borderRadius: '33px', height: '450px' }}>
                    <form id="UpdateForm" style={{ paddingTop: "70px" }}>
                        <div className="form-group row ">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "128%", fontWeight: "bold", height: '150%', }}>Order ID : </label>
                            <div className="col-sm-10">
                                <h5 style={{ marginTop: '10px', marginLeft: '30%' }}>{id}</h5>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "128%", fontWeight: "bold", height: '150%' }} value={address1}>Address :</label>
                            <div className="col-sm-10">
                                <h5 style={{ marginTop: '10px', marginLeft: '30%' }}>{address1}, {address2}, {address3}</h5>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-4 col-form-label col-form-label-lg" style={{ fontSize: "128%", fontWeight: "bold", height: '150%' }}>Phone Number :</label>
                            <div className="col-sm-3">
                                <h5 style={{ marginTop: '10px', marginLeft: '34%' }}>{phoneNumber}</h5>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="exampleFormControlSelect1" style={{ fontSize: "128%", fontWeight: "bold", height: '50px' }}>Order Delivery Status: </label>
                            <select className="form-control" id="exampleFormControlSelect1" style={{ width: '40%', marginLeft: '14%' }} defaultValue={statuss} onChange={(e) => { setStatuss(e.target.value) }}>
                                <option>Pending</option>
                                <option>Processing</option>
                                <option>Shipped</option>
                                <option>Delivered</option>
                            </select>
                        </div>
                        <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                            <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginTop: '20px', fontWeight: 'bold', fontSize: "130%" }} onClick={cancel}><Backspace /> Cancel</button>
                            <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginTop: '20px', fontWeight: 'bold', fontSize: "130%" }} onClick={updateStatus}><Folder /> Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}
