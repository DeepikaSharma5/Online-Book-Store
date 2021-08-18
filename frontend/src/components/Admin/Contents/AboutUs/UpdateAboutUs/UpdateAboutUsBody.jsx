import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Folder, Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';

export default function UpdateAboutUsBody() {
    var AboutUs = reactLocalStorage.getObject('AboutUs');
    const id = AboutUs[0];
    const [mission, setMission] = useState(AboutUs[1]);
    const [missionInfo, setMissionInfo] = useState(AboutUs[2]);
    const [customerService, setCustomerService] = useState(AboutUs[3]);
    const [convenience, setConvenience] = useState(AboutUs[4]);
    const [choice, setChoice] = useState(AboutUs[5]);
    const [story1, setStory1] = useState(AboutUs[6]);
    const [story2, setStory2] = useState(AboutUs[7]);
    const [story3, setStory3] = useState(AboutUs[8]);

    function updateAboutUs(e) {
        e.preventDefault();
        const newAboutUs = {
            mission,
            missionInfo,
            customerService,
            convenience,
            choice,
            story1,
            story2,
            story3
        }

        axios.post("http://localhost:6060/about-us/update/" + id, newAboutUs)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'About Us details has been updated',
                    showConfirmButton: false,
                    timer: 2000
                }).then(okay => {
                    if (okay) {
                        window.location.href = APP_ROUTES.ADMIN_VIEW_ABOUT_US;
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
        window.location.href = APP_ROUTES.ADMIN_VIEW_ABOUT_US;
    }

    return (
        <div style={{height:'1200px', position:'relative', left:'80px'}}>
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '80rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                <div className="col" style={{ borderRadius: '33px', height: '1100px' }}>
                    <form style={{ paddingTop: "70px" }}>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Mission: <label style={{ color: 'red' }}>*</label></label>
                            <div className="col-sm-10">
                                <textarea className="form-control form-control-md" id="mission" rows="1" name="mission" value={mission} onChange={(e) => { setMission(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Mission Info:<label style={{ color: 'red' }}>*</label></label>
                            <div className="col-sm-10">
                                <textarea className="form-control form-control-md" id="missionInfo" rows="2" name="missionInfo" value={missionInfo} onChange={(e) => { setMissionInfo(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Customer Service: <label style={{ color: 'red' }}>*</label></label>
                            <div className="col-sm-10">
                                <textarea className="form-control form-control-md" id="customerService" rows="2" name="customerService" value={customerService} onChange={(e) => { setCustomerService(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Convenience:<label style={{ color: 'red' }}>*</label></label>
                            <div className="col-sm-10">
                                <textarea className="form-control form-control-md" id="convenience" rows="2" name="convenience" value={convenience} onChange={(e) => { setConvenience(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Choice: <label style={{ color: 'red' }}>*</label></label>
                            <div className="col-sm-10">
                                <textarea className="form-control form-control-md" id="choice" rows="2" name="choice" value={choice} onChange={(e) => { setChoice(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Story 1: <label style={{ color: 'red' }}>*</label></label>
                            <div className="col-sm-10">
                                <textarea className="form-control form-control-md" id="story1" rows="3" name="story1" value={story1} onChange={(e) => { setStory1(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Story 2: <label style={{ color: 'red' }}>*</label></label>
                            <div className="col-sm-10">
                                <textarea className="form-control form-control-md" id="story2" rows="3" name="story2" value={story2} onChange={(e) => { setStory2(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Story 3: <label style={{ color: 'red' }}>*</label></label>
                            <div className="col-sm-10">
                                <textarea className="form-control form-control-md" id="story3" rows="3" name="story3" value={story3} onChange={(e) => { setStory3(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                            <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%", position:'relative', left:'200px' }} onClick={cancel}><Backspace /> Cancel</button>
                            <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%", position:'relative', right:'200px'}} onClick={updateAboutUs}><Folder /> Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
