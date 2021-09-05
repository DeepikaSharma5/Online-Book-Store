import React, { Component } from 'react';
import axios from 'axios';
import { Pencil, PlusLg } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../utilities/constants/routes.constants';
import { reactLocalStorage } from 'reactjs-localstorage';
import Header from "../Homepage/Header/Header";
import Footer from '../Homepage/Footer/Footer';


class ViewDeliveryAddress extends Component {
    constructor(props) {
        super(props);
        this.updateDeliveryAddress = this.updateDeliveryAddress.bind(this);
        this.state = {
            deliveryAddress: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/delivery-address/view')
            .then(response => {
                const deliveryAddress = response.data;
                this.setState({ deliveryAddress });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    updateDeliveryAddress(id, name, address1, address2, address3, phone, email) {
        reactLocalStorage.setObject("deliveryAddress", [id, name, address1, address2, address3, phone, email]);
        window.location.href = APP_ROUTES.USER_UPDATE_ADDRESS;
    }

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <h2 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{ fontWeight: "bold", fontSize: '300%' }}>DELIVERY ADDRESS DETAIL</h2>
                </div>
                <div>
                    <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '80rem', margin: 'auto', padding: '10px' }}>
                        <div>
                            {
                                (this.state.deliveryAddress.length > 0 ?
                                    <button type="button" className="btn btn-info" style={{ float: 'right', padding: '12px 28px', marginBottom: '30px' }} disabled={true}>
                                        <PlusLg /> Add new Delivery Address
                                    </button>
                                    :
                                    <button type="button" className="btn btn-info" style={{ float: 'right', padding: '12px 28px', marginBottom: '30px' }} onClick={() => { window.location.href = APP_ROUTES.USER_ADD_ADDRESS }}>
                                        <PlusLg /> Add new Delivery Address
                                    </button>

                                )
                            }
                        </div>
                        <div className="col-md-14 col-sm-12" style={{ maxWidth: '60rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                            <div className="col" style={{ borderRadius: '33px', height: '600px' }}>
                                {this.state.deliveryAddress.map((item) => (
                                    <form style={{ paddingTop: "70px", paddingLeft: "10%" }}>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-lg-4 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '50px', paddingLeft: "5%", marginLeft:'80px' }}>Full Name : </label>
                                            <div className="col-sm-6">
                                                <h5 style={{ paddingTop: "1.5%", paddingLeft: "15%" }}>{item.name}</h5>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-lg-4 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '50px', paddingLeft: "5%",  marginLeft:'80px' }}>Address Line 1 (No) :</label>
                                            <div className="col-sm-6">
                                                <h5 style={{ paddingTop: "1.5%", paddingLeft: "15%" }}>{item.address1}</h5>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-lg-4 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '50px', paddingLeft: "5%",  marginLeft:'80px' }}>Address Line 2 (Lane) : </label>
                                            <div className="col-sm-6">
                                                <h5 style={{ paddingTop: "1.5%", paddingLeft: "15%" }}>{item.address2}</h5>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-lg-4 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '50px', paddingLeft: "5%",  marginLeft:'80px' }}>Address Line 3 (City) : </label>
                                            <div className="col-sm-6">
                                                <h5 style={{ paddingTop: "1.5%", paddingLeft: "15%" }}>{item.address3}</h5>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-lg-4 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '50px', paddingLeft: "5%",  marginLeft:'80px' }}>Phone Number : </label>
                                            <div className="col-sm-6">
                                                <h5 style={{ paddingTop: "1.5%", paddingLeft: "15%" }}>{item.phoneNumber}</h5>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-lg-4 col-form-label col-form-label-lg" style={{ fontSize: "130%", fontWeight: "bold", height: '50px', paddingLeft: "5%",  marginLeft:'80px' }}>Email : </label>
                                            <div className="col-sm-6">
                                                <h5 style={{ paddingTop: "1.5%", paddingLeft: "15%" }}>{item.email}</h5>
                                            </div>
                                        </div>
                                        <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups" style={{ marginLeft: '28%' }}>
                                            <center><button type="button" className="btn btn-outline-primary" style={{ padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={() => this.updateDeliveryAddress(item._id, item.name, item.address1, item.address2, item.address3, item.phone, item.email)}><Pencil /> Update</button></center>
                                        </div>
                                    </form>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ViewDeliveryAddress;