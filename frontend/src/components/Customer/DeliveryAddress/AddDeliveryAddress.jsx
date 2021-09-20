import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../utilities/constants/routes.constants';
import Header from "../Homepage/Header/Header";
import Footer from "../Homepage/Footer/Footer";

class AddDeliveryAddress extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClear = this.onClear.bind(this);
        this.state = {
            name: "",
            address1: "",
            address2: "",
            address3: "",
            phoneNumber: "",
            email: "",
            phoneVal: false,
            email_validation: false
        }
    }

    validatePhone = () => {
        let phoneNumber = this.state.phoneNumber;
        if (isNaN(phoneNumber)) {
            Swal.fire({
                icon: 'error',
                text: phoneNumber + "is not recognized as a valid number. Please check the input."
            })
        } else if (phoneNumber.length != 10) {
            Swal.fire({
                icon: 'error',
                text: "The phone number you entered is not recognized as a valid mobile number. The number of digits should be 10"
            })
        } else {
            this.setState({ phoneVal: true })
        }
    }

    validateEmail = () => {
        let email = this.state.email;
        var email_values = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

        if (!email_values.test(email)) {
            Swal.fire({
                icon: 'error',
                text: "Invalid Entry! Please check the email field and try again."
            })
        } else {
            this.setState({ email_validation: true })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e) {
        e.preventDefault();
        if (this.state.phoneVal && this.state.email_validation) {
            let DeliveryAddress = {
                name: this.state.name,
                address1: this.state.address1,
                address2: this.state.address2,
                address3: this.state.address3,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email
            }
            axios.post('http://localhost:6060/delivery-address/add', DeliveryAddress)
                .then(() => {
                    Swal.fire({
                        title: "Success!",
                        text: "Added Successed!",
                        icon: 'success',
                        confirmButtonText: "OK",
                        type: "success"
                    }).then(okay => {
                        if (okay) {
                            window.location.href = APP_ROUTES.USER_VIEW_ADDRESS;
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
        }
    }

    onClear(e) {
        this.setState = {
            name: "",
            address1: "",
            address2: "",
            address3: "",
            phoneNumber: "",
            email: ""
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px' }}>
                    <h2 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{ fontWeight: "bold", fontSize: '300%' }}>ADD DELIVERY ADDRESS DETAIL</h2>
                </div>
                <div style={{ height: "960px" }}>
                    <div className="col-md-14 col-sm-12" style={{ maxWidth: '80rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                        <div className="col" style={{ borderRadius: '33px', height: '900px' }}>
                            <form style={{ paddingTop: "70px" }}>
                                <div className="form-group row">
                                    <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Full Name: <label style={{ color: 'red' }}>*</label></label>
                                    <div className="col-sm-10">
                                        <input type="text" id="name" className="form-control form-control-lg" name="name" value={this.state.name} onChange={this.onChange} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Address Line 1 (No): <label style={{ color: 'red' }}>*</label></label>
                                    <div className="col-sm-10">
                                        <input type="text" id="address1" className="form-control form-control-lg" name="address1" value={this.state.address1} onChange={this.onChange} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Address Line 2 (Lane): <label style={{ color: 'red' }}>*</label></label>
                                    <div className="col-sm-10">
                                        <input type="text" id="address2" className="form-control form-control-lg" name="address2" value={this.state.address2} onChange={this.onChange} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Address Line 3 (City): <label style={{ color: 'red' }}>*</label></label>
                                    <div className="col-sm-10">
                                        <input type="text" id="address3" className="form-control form-control-lg" name="address3" value={this.state.address3} onChange={this.onChange} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>phoneNumber Number: <label style={{ color: 'red' }}>*</label></label>
                                    <div className="col-sm-10">
                                        <input type="number" id="phoneNumber" className="form-control form-control-lg" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} onBlur={this.validatePhone} placeholder="0774567891" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Email: <label style={{ color: 'red' }}>*</label></label>
                                    <div className="col-sm-10">
                                        <input type="email" id="email" className="form-control form-control-lg" name="email" value={this.state.email} onChange={this.onChange} onBlur={this.validateEmail} />
                                    </div>
                                </div>
                                <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                    <button type="submit" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={() => { window.location.href = APP_ROUTES.USER_VIEW_ADDRESS }}><Backspace /> Cancel</button>
                                    <button type="reset" className="btn btn-outline-primary" style={{ float: 'center', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={this.onClear}><XCircle /> Clear</button>
                                    <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={this.onSubmit}><Folder /> Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default AddDeliveryAddress;