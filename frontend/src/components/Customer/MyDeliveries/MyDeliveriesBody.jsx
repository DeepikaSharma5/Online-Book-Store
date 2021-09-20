import React, { Component } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../utilities/constants/routes.constants';

class MyDeliveriesBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/delivery-status/view')
            .then(response => {
                const status = response.data;
                this.setState({ status });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    getPdf(id, name, address1, address2, address3, phoneNumber, statuss, date, updatedAt) {
        reactLocalStorage.setObject("getPdf", [id, name, address1, address2, address3, phoneNumber, statuss, date, updatedAt]);
        window.location.href= APP_ROUTES.USER_DELIVERY_PDF;
    }

    render() {
        return (
            <div>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>
                    <div className="card overflow-auto" style={{ maxHeight: '300%', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                        <div className="card-body">
                            <div style={{ height: '450px' }}>
                                <div className="card-body" >
                                    <div className="row">
                                        <table className="table table-bordered" style={{ textAlign: 'center' }}>
                                            <thead className="thead-light" >
                                                <tr>
                                                    <th scope="col" className="w-25">Order ID</th>
                                                    <th scope="col" className="w-50">Order Date</th>
                                                    <th scope="col" className="w-15">Order Delivery Status</th>
                                                    <th scope="col" className="w-15">Get PDF</th>
                                                </tr>
                                            </thead>
                                            {this.state?.status?.length > 0 && this.state.status.map((item, index) =>
                                                <tbody key={index}>
                                                    <tr>
                                                        <td>{item._id}</td>
                                                        <td>{item.date}</td>
                                                        <td>
                                                            {item.state === '' ?
                                                                <p></p>
                                                                :
                                                                item.statuss === 'Pending' ?
                                                                    <button type="button" className="btn btn-danger" style={{ width: '120px' }}>{item.statuss}</button>
                                                                    :
                                                                    item.statuss === 'Delivered' ?
                                                                        <button type="button" className="btn btn-success" style={{ width: '120px' }}>{item.statuss}</button>
                                                                        :
                                                                        item.statuss === 'Processing' ?
                                                                            <button type="button" className="btn btn-info" style={{ width: '120px' }}>{item.statuss}</button>
                                                                            :
                                                                            <button type="button" className="btn btn-warning" style={{ width: '120px' }}>{item.statuss}</button>
                                                            }
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn" style={{ width: '120px', backgroundColor:'#20c997' }} onClick={() => this.getPdf(item._id, item.name, item.address1, item.address2, item.address3, item.phoneNumber, item.statuss, item.date, item.updatedAt)}>Get PDF</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyDeliveriesBody;