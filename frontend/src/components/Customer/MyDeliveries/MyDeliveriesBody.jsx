import React, { Component } from 'react';
import axios from 'axios';

class MyDeliveriesBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            policy: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/private-policy/view')
            .then(response => {
                const policy = response.data;
                this.setState({ policy });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
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
                                                </tr>
                                            </thead>
                                            {this.state?.policy?.length > 0 && this.state.policy.map((item, index) =>
                                                <tbody key={index}>
                                                    <tr>
                                                        <td>{item.heading}</td>
                                                        <td>{item.details}</td>
                                                        <td></td>
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