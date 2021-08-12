import React, { Component } from 'react';
import { Trash, Pencil, PlusLg } from 'react-bootstrap-icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';

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
                    text: "About Us Deleting Not Success",
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
        window.location.href = "/admin-update-private-policy";
    }

    render() {
        return (
            <div>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>
                    <button type="button" className="btn btn-default" onClick={() => { window.location.href = "/admin-add-private-policy" }}>
                        <PlusLg /> Add new Private Policy
                    </button>
                    <div className="card-body" >
                        <div className="row">
                            <table className="table table-success table-striped">
                                <thead className="table-info" >
                                    <tr>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Details</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                {this.state?.policy?.length > 0 && this.state.policy.map((item, index) =>
                                    <tbody key={index}>
                                        <tr>
                                            <td>{item.heading}</td>
                                            <td>{item.details}</td>
                                            <td>
                                                <button type="button" className="btn btn-default" onClick={() => this.updatePrivatePolicy(item._id, item.heading, item.details)}>
                                                    <Pencil />Update
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-default" onClick={() => this.deleteData(item._id)}>
                                                    <Trash />Delete
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
        );
    }
}

export default PrivatePolicyBody;