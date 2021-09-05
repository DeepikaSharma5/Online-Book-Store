import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Folder, Backspace, XCircle } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../utilities/constants/routes.constants';
import Header from "../Homepage/Header/Header";
import Footer from '../Homepage/Footer/Footer';

export default function UpdateDeliveryAddress() {
    var deliveryAddress = reactLocalStorage.getObject('deliveryAddress');
    const id = deliveryAddress[0];
    const [name, setName] = useState(deliveryAddress[1]);
    const [address1, setAddress1] = useState(deliveryAddress[2]);
    const [address2, setAddress2] = useState(deliveryAddress[3]);
    const [address3, setAddress3] = useState(deliveryAddress[4]);
    const [phoneNumber, setPhoneNumber] = useState(deliveryAddress[5]);
    const [email, setEmail] = useState(deliveryAddress[6]);


    function updateDeliveryAddress(e) {
        e.preventDefault();
        const newAboutUs = {
            name,
            address1,
            address2,
            address3,
            phoneNumber,
            email
        }

        axios.post("http://localhost:6060/delivery-address/update/" + id, newAboutUs)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Delivery Address has been updated',
                    showConfirmButton: false,
                    timer: 2000
                }).then(okay => {
                    if (okay) {
                        window.location.href = APP_ROUTES.USER_VIEW_ADDRESS;
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
        window.location.href = APP_ROUTES.USER_VIEW_ADDRESS;
    }

    function reset() {
        setName(" ");
        setAddress1("");
        setAddress2("");
        setAddress3("");
        setPhoneNumber("");
        setEmail("");
    }


    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px' }}>
                <h2 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{ fontWeight: "bold", fontSize: '300%' }}>ADD DELIVERY ADDRESS DETAIL</h2>
            </div>
            <div style={{ height:"960px" }}>
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '80rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                    <div className="col" style={{ borderRadius: '33px', height: '900px' }}>
                        <form style={{ paddingTop: "70px" }}>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Full Name: <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <input type="text" id="name" className="form-control form-control-lg" name="name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Address Line 1 (No): <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <input type="text" id="address1" className="form-control form-control-lg" name="address1" value={address1} onChange={(e) => { setAddress1(e.target.value) }} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Address Line 2 (Lane): <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <input type="text" id="address2" className="form-control form-control-lg" name="address2" value={address2} onChange={(e) => { setAddress2(e.target.value) }} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Address Line 3 (City): <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <input type="text" id="address3" className="form-control form-control-lg" name="address3" value={address3} onChange={(e) => { setAddress3(e.target.value) }} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>phoneNumber Number: <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <input type="number" id="phoneNumber" className="form-control form-control-lg" name="phoneNumber" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} required placeholder="0774567891" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Email: <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <input type="email" id="email" className="form-control form-control-lg" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                                </div>
                            </div>
                            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={cancel}><Backspace /> Cancel</button>
                                <button type="reset" className="btn btn-outline-primary" style={{ float: 'center', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={reset}><XCircle /> Clear</button>
                                <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={updateDeliveryAddress}><Folder /> Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

