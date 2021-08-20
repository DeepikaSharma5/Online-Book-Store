import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';

class AddAboutUsBody extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClear = this.onClear.bind(this);
        this.state = {
            mission: "",
            missionInfo: "",
            customerService: "",
            convenience: "",
            choice: "",
            story1: "",
            story2: "",
            story3: ""
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e) {
        e.preventDefault();
        let AddAboutUs = {
            mission: this.state.mission,
            missionInfo: this.state.missionInfo,
            customerService: this.state.customerService,
            convenience: this.state.convenience,
            choice: this.state.choice,
            story1: this.state.story1,
            story2: this.state.story2,
            story3: this.state.story3
        }
        console.log('Data', AddAboutUs);
        axios.post('http://localhost:6060/about-us/add', AddAboutUs)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Added Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = APP_ROUTES.ADMIN_VIEW_ABOUT_US;
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

    onClear(e) {
        this.setState = {
            mission: " ",
            missionInfo: " ",
            customerService: " ",
            convenience: "",
            choice: "",
            story1: " ",
            story2: " ",
            story3: " "
        }
    }

    render() {
        return (
            <div style={{height:'1200px', position:'relative', left:'80px'}}>
                <div className="col-md-14 col-sm-12" style={{ maxWidth: '80rem', margin: 'auto', padding: '30px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                    <div className="col" style={{ borderRadius: '33px', height: '1050px' }}>
                        <form style={{ paddingTop: "70px" }}>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Mission: <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <textarea className="form-control form-control-md" id="mission" rows="1" name="mission" value={this.state.mission} onChange={this.onChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Mission Info:<label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <textarea className="form-control form-control-md" id="missionInfo" rows="2" name="missionInfo" value={this.state.missionInfo} onChange={this.onChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Customer Service: <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <textarea className="form-control form-control-md" id="customerService" rows="2" name="customerService" value={this.state.customerService} onChange={this.onChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Convenience:<label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <textarea className="form-control form-control-md" id="convenience" rows="2" name="convenience" value={this.state.convenience} onChange={this.onChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Choice: <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <textarea className="form-control form-control-md" id="choice" rows="2" name="choice" value={this.state.choice} onChange={this.onChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Story 1: <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <textarea className="form-control form-control-md" id="story1" rows="3" name="story1" value={this.state.story1} onChange={this.onChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Story 2: <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <textarea className="form-control form-control-md" id="story2" rows="3" name="story2" value={this.state.story2} onChange={this.onChange} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Story 3: <label style={{ color: 'red' }}>*</label></label>
                                <div className="col-sm-10">
                                    <textarea className="form-control form-control-md" id="story3" rows="3" name="story3" value={this.state.story3} onChange={this.onChange} required />
                                </div>
                            </div>
                            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={() => { window.location.href = APP_ROUTES.ADMIN_VIEW_ABOUT_US }}><Backspace /> Cancel</button>
                                <button type="reset" className="btn btn-outline-primary" style={{ float: 'center', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={this.onClear}><XCircle /> Clear</button>
                                <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={this.onSubmit}><Folder /> Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAboutUsBody;