import React, { Component } from 'react';
import { Trash, Pencil, PlusLg, FileEarmarkPdf, Search } from 'react-bootstrap-icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../../utilities/constants/routes.constants';

class PrivatePolicyBody extends Component {
    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
        this.updatePrivatePolicy = this.updatePrivatePolicy.bind(this);
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

    deleteData(id) {
        axios.delete('http://localhost:6060/private-policy/delete/' + id)
            .then(() => {
                Swal.fire({
                    title: "Are you sure want to delete?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: "true",
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(okay => {
                    if (okay.isConfirmed) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Deleting Not Success",
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
            });
    }

    updatePrivatePolicy(id, heading, details) {
        reactLocalStorage.setObject("PrivatePolicy", [id, heading, details]);
        window.location.href = APP_ROUTES.ADMIN_UPDATE_DELIVERY;
    }

    render() {
        return (
            <div style={{ position: 'relative', left: '110px' }}>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>
                    <div>
                        {/* <input type="submit" className="orm-control mr-sm-2" placeholder="Search" style={{ float: 'right', padding: '12px 28px', marginBottom: '30px' }} >
                            <Search />
                        </input> */}
                    </div>
                    <div className="card overflow-auto" style={{ maxHeight: '400%', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                        <div className="card-body">
                            <div style={{ height: '540px' }}>
                                <div className="card-body" >
                                    <div className="row">
                                        <table className="table table-bordered" style={{ textAlign: 'center' }}>
                                            <thead className="thead-light" >
                                                <tr>
                                                    <th scope="col" className="w-15">Order ID</th>
                                                    <th scope="col" className="w-30">Address 1</th>
                                                    <th scope="col" className="w-30">Address 2</th>
                                                    <th scope="col" className="w-30">Address 3</th>
                                                    <th scope="col" className="w-30">Phone Number</th>
                                                    <th scope="col" className="w-20">Order Delivery Status</th>
                                                    <th scope="col" className="w-15">Update</th>
                                                    <th scope="col" className="w-15">Delete</th>
                                                </tr>
                                            </thead>
                                            {this.state?.policy?.length > 0 && this.state.policy.map((item, index) =>
                                                <tbody key={index}>
                                                    <tr>
                                                        <td>{item.heading}</td>
                                                        <td>{item.details}</td>
                                                        <td>{item.heading}</td>
                                                        <td>{item.details}</td>
                                                        <td>{item.heading}</td>
                                                        <td>{item.details}</td>
                                                        <td>
                                                            <button type="button" className="btn btn-outline-success" onClick={() => this.updatePrivatePolicy(item._id, item.heading, item.details)}>
                                                                <Pencil /> Update
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-outline-danger" onClick={() => this.deleteData(item._id)}>
                                                                <Trash /> Delete
                                                            </button>
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
                    <div>
                        <button type="button" className="btn btn-info" style={{ float: 'left', padding: '12px 28px', marginTop: '30px' }} >
                            <FileEarmarkPdf /> Generate Report
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PrivatePolicyBody;