import React, { Component } from 'react';
import axios from 'axios';
import { Pencil, PlusLg } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';
import { reactLocalStorage } from 'reactjs-localstorage';

class ViewAboutUsBody extends Component {
    constructor(props) {
        super(props);
        this.updateAboutUs = this.updateAboutUs.bind(this);
        this.state = {
            aboutus: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/about-us/view')
            .then(response => {
                const aboutus = response.data;
                this.setState({ aboutus });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    updateAboutUs(id, mission, missionInfo, customerService, convenience, choice, story1, story2, story3) {
        reactLocalStorage.setObject("AboutUs", [id, mission, missionInfo, customerService, convenience, choice, story1, story2, story3]);
        window.location.href = APP_ROUTES.ADMIN_UPDATE_ABOUT_US;
    }


    render() {
        return (
            <div style={{ position: 'relative', left: '110px' }}>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '90rem', margin: 'auto', padding: '10px' }}>
                    <div>
                        {
                            (this.state.aboutus.length > 0 ?
                                <button type="button" className="btn btn-info" style={{ float: 'right', padding: '12px 28px', marginBottom: '30px' }} disabled={true}>
                                    <PlusLg /> Add About Us Details
                                </button>
                                :
                                <button type="button" className="btn btn-info" style={{ float: 'right', padding: '12px 28px', marginBottom: '30px' }} onClick={() => { window.location.href = APP_ROUTES.ADMIN_ADD_ABOUT_US }}>
                                    <PlusLg /> Add About Us Details
                                </button>
                            )
                        }
                    </div>
                    <div className="col-md-14 col-sm-12" style={{ margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                        <div className="col" style={{ borderRadius: '33px', height: '1100px' }}>
                            {this.state.aboutus.map((item) => (
                                <form style={{ paddingTop: "70px" }}>
                                    <div className="form-group row">
                                        <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Mission: </label>
                                        <div className="col-sm-10" style={{ paddingTop: '15px' }}>
                                            <h5>{item.mission}</h5>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Mission Info: </label>
                                        <div className="col-sm-10" style={{ paddingTop: '15px' }}>
                                            <h5>{item.missionInfo}</h5>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Customer Service: </label>
                                        <div className="col-sm-10" style={{ paddingTop: '15px' }}>
                                            <h5>{item.customerService}</h5>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Convenience: </label>
                                        <div className="col-sm-10" style={{ paddingTop: '15px' }}>
                                            <h5>{item.convenience}</h5>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Choice: </label>
                                        <div className="col-sm-10" style={{ paddingTop: '15px' }}>
                                            <h5>{item.choice}</h5>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Story 1:</label>
                                        <div className="col-sm-10" style={{ paddingTop: '15px' }}>
                                            <h5>{item.story1}</h5>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Story 2: </label>
                                        <div className="col-sm-10" style={{ paddingTop: '15px' }}>
                                            <h5>{item.story2}</h5>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputSubject" className="col-sm-2 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '100px' }}>Story 3: </label>
                                        <div className="col-sm-10" style={{ paddingTop: '15px' }}>
                                            <h5>{item.story3}</h5>
                                        </div>
                                    </div>
                                    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                        <button type="button" className="btn btn-outline-primary" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%", position: 'relative', left: '40%' }} onClick={() => this.updateAboutUs(item._id, item.mission, item.missionInfo, item.customerService, item.convenience, item.choice, item.story1, item.story2, item.story3)}><Pencil /> Update</button>
                                    </div>
                                </form>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAboutUsBody;