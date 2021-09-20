import React, { Component } from "react";
import axios from 'axios';
import Header from '../Homepage/Header/Header';
import Footer from '../Homepage/Footer/Footer';
import Image from '../../../assets/images/store.jpg';
import Image2 from '../../../assets/images/store2.png';
import HomeTeamDetails from "./TeamDetails";

class AboutUsHome extends Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div>
                <Header />
                <img src={Image} className="img-fluid" width="100%" alt="..."></img>
                <div className="container" style={{ marginTop: '5%' }}>
                    {this.state.aboutus.map((item,key) => (
                        <div className="row ps-16" key={key}>
                            <div className="col-sm-1 "></div>
                            <div className="col-sm-10 ">
                                <span className=" h2 text-dark text-uppercase" style={{ textDecoration: 'none' }}>{item.mission}</span>
                            </div>
                            <div className="card-deck" style={{ paddingTop: '40px' }}>
                                <div className="card col-4">
                                    <div className="card-body">
                                        <img src={Image2} className="img-fluid" width="100%" alt="Book Lab"></img>
                                    </div>
                                </div>
                                <div className="card col-8">
                                    <div className="card-body" style={{ alignContent: "right" }}>
                                        <p className="card-text">{item.missionInfo}</p>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-md-4 col-form-label col-form-label-md" style={{ fontSize: "130%", fontWeight: "bold" }}>Customer Service: </label>
                                            <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                                <p className="card-text">{item.customerService}</p>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-md-4 col-form-label col-form-label-md" style={{ fontSize: "130%", fontWeight: "bold" }}>Convenience: </label>
                                            <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                                <p className="card-text">{item.convenience}</p>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-md-4 col-form-label col-form-label-md" style={{ fontSize: "130%", fontWeight: "bold" }}>Choice: </label>
                                            <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                                <p className="card-text">{item.choice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <center className="pt-5">
                    <hr className="w-75 " />
                </center>
                <div className="container" style={{ height: '500px' }}>
                    {this.state.aboutus.map((item) => (
                        <div className="card-deck" style={{ paddingTop: '40px' }}>
                            <div className="card col-4">
                                <div>
                                    <center><span className=" h2 text-black text-uppercase" style={{ textDecoration: 'none' }}><br />Story of Book Lab</span></center>
                                </div>
                                <div className="card-body" style={{ alignContent: "right" }}>
                                    <div className="form-group row">
                                        <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                            <p className="card-text">{item.story1}</p>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                            <p className="card-text">{item.story2}</p>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                            <p className="card-text">{item.story3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card col-8">
                                <div className="card-body">
                                    <HomeTeamDetails />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default AboutUsHome;