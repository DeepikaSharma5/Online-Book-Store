import React, { Component } from 'react';
import { Trash, Pencil, FileEarmarkPdf, Search } from 'react-bootstrap-icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../../utilities/constants/routes.constants';

class PrivatestatusBody extends Component {
    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
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

    deleteData(id) {
        axios.delete('http://localhost:6060/delivery-status/delete/' + id)
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

    updateStatus(id, address1, address2, address3, phoneNumber, status) {
        reactLocalStorage.setObject("UpdateStatus", [id, address1, address2, address3, phoneNumber, status]);
        window.location.href = APP_ROUTES.ADMIN_UPDATE_DELIVERY;
    }

    render() {
        return (
            <div style={{ position: 'relative', left: '110px' }}>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>

                    <div className="card border-light" style={{ maxHeight: '2%', background: '#ffffff'}}>
                        <div className="card-body">
                            <div style={{ height: '5%' }}>
                                <div className="card-body" >
                                    <div className="row">
                                        <div className="col" >
                                            <select className="form-control" id="exampleFormControlSelect1" style={{ width: '50%' }}>
                                                <option>All</option>
                                                <option>Pending</option>
                                                <option>Processing</option>
                                                <option>Shipped</option>
                                                <option>Delivered</option>
                                            </select>
                                        </div>
                                        <div className="col" >
                                            <form className="form-inline" style={{ float: 'right' }}>
                                                <input className="form-control mr-sm-2" type="search" placeholder="Search By Order ID" aria-label="Search" />
                                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card overflow-auto" style={{ maxHeight: '400%', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                        <div className="card-body">
                            <div style={{ height: '450px' }}>
                                <div className="card-body" >
                                    <div className="row">
                                        <table className="table table-bordered" style={{ textAlign: 'center' }}>
                                            <thead className="thead-light" >
                                                <tr>
                                                    <th scope="col" className="w-10">Order ID</th>
                                                    <th scope="col" className="w-25">Address </th>
                                                    <th scope="col" className="w-10">Phone Number</th>
                                                    <th scope="col" className="w-15">Order Delivery Status</th>
                                                    <th scope="col" className="w-15">Update</th>
                                                    <th scope="col" className="w-15">Delete</th>
                                                </tr>
                                            </thead>
                                            {this.state?.status?.length > 0 && this.state.status.map((item, index) =>
                                                <tbody key={index}>
                                                    <tr>
                                                        <td>{item._id}</td>
                                                        <td>{item.address1}. {item.address2}, {item.address3}</td>
                                                        <td>{item.phoneNumber}</td>
                                                        <td>
                                                            {item.state === '' ?
                                                                <p></p>
                                                                :
                                                                item.status === 'Pending' ?
                                                                    <button type="button" className="btn btn-danger" style={{ width: '120px' }}>{item.status}</button>
                                                                    :
                                                                    item.status === 'Delivered' ?
                                                                        <button type="button" className="btn btn-success" style={{ width: '120px' }}>{item.status}</button>
                                                                        :
                                                                        item.status === 'Processing' ?
                                                                            <button type="button" className="btn btn-info" style={{ width: '120px' }}>{item.status}</button>
                                                                            :
                                                                            <button type="button" className="btn btn-warning" style={{ width: '120px' }}>{item.status}</button>
                                                            }
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-outline-success" onClick={() => this.updateStatus(item._id, item.address1, item.address2, item.address3, item.phoneNumber, item.status)}>
                                                                <Pencil /> Update
                                                            </button>
                                                        </td>
                                                        <td>
                                                            {item.status === "Delivered" ?
                                                                <button type="button" className="btn btn-outline-danger" onClick={() => this.deleteData(item._id)}>
                                                                    <Trash /> Delete
                                                                </button>
                                                                :
                                                                <button type="button" className="btn btn-outline-danger" disabled={true}>
                                                                    <Trash /> Delete
                                                                </button>
                                                            }
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
                <div>
                    <button type="button" className="btn btn-info" style={{ float: 'left', padding: '12px 28px', marginTop: '30px' }} >
                        <FileEarmarkPdf /> Generate Report
                    </button>
                </div>
            </div>

        );
    }
}

export default PrivatestatusBody;