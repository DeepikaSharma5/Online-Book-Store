import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';

class AddPrivatePolicyBody extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClear = this.onClear.bind(this);
        this.state = {
            heading: '',
            details: ''
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e) {
        e.preventDefault();
        let AddPrivatePolicy = {
            heading: this.state.heading,
            details: this.state.details,
        }
        console.log('Data', AddPrivatePolicy);
        axios.post('http://localhost:6060/private-policy/add', AddPrivatePolicy)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Added Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/admin-view-private-policy";
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

    onClear(e){
        this.setState= {
            heading: " ",
            details: " "
        }
    }

    render() {
        return (
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                <div className="col" style={{ borderRadius: '33px', height: '590px' }}>
                    <form style={{ paddingTop: "70px" }}>
                        <div className="form-group row ">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "170%", fontWeight: "bold", height: '150px' }}>Heading: <label style={{ color: 'red' }}>*</label></label>
                            <div className="col-sm-10">
                                <input type="text" id="heading" className="form-control form-control-lg" name="heading" value={this.state.heading} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "170%", fontWeight: "bold", height: '200px' }}>Details: <label style={{ color: 'red' }}>*</label></label>
                            <div className="col-sm-10">
                                <textarea className="form-control form-control-lg" id="details" rows="4" name="details" value={this.state.details} onChange={this.onChange} required />
                            </div>
                        </div>
                        <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                            <button type="submit" className="btn btn-outline-danger" style={{ float: 'right',padding: '12px 68px', marginBottom:'30px',fontWeight:'bold', fontSize:"130%" }} onClick={() => { window.location.href = "/admin-view-private-policy" }}><Backspace/> Cancel</button>
                            <button type="submit" className="btn btn-outline-primary" style={{ float: 'center',padding: '12px 68px', marginBottom:'30px', fontWeight:'bold', fontSize:"130%"  }} onClick={this.onClear}><XCircle/> Clear</button>
                            <button type="submit" className="btn btn-outline-success" style={{ float: 'left',padding: '12px 68px', marginBottom:'30px', fontWeight:'bold', fontSize:"130%" }} onClick={this.onSubmit}><Folder/> Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddPrivatePolicyBody;