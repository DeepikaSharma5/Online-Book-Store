import React, { Component } from 'react';
import { Trash, Pencil, PlusLg } from 'react-bootstrap-icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';

class ViewTermsAndConditionsBody extends Component {
    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
        this.updateTermsAndConditions = this.updateTermsAndConditions.bind(this);
        this.state = {
            termsAndconditions: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/terms-and-conditions/view')
            .then(response => {
                const termsAndconditions = response.data;
                this.setState({ termsAndconditions });
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    deleteData(id) {
        axios.delete('http://localhost:6060/terms-and-conditions/delete/' + id)
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

    updateTermsAndConditions(id, heading, details) {
        reactLocalStorage.setObject("TermsAndConditions", [id, heading, details]);
        window.location.href = APP_ROUTES.ADMIN_UPDATE_TERMS_AND_CONDITIONS;
    }

    render() {
        return (
            <div style={{ position: 'relative', left: '110px' }}>
                <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px' }}>
                    <div>
                        <button type="button" className="btn btn-info" style={{ float: 'right', padding: '12px 28px', marginBottom: '30px' }} onClick={() => { window.location.href = APP_ROUTES.ADMIN_ADD_TERMS_AND_CONDITIONS }}>
                            <PlusLg /> Add new Terms {`&`} Conditions
                        </button>
                    </div>
                    <div className="card overflow-auto" style={{ maxHeight: '300%', background: '#ffffff', boxShadow: '10px 10px 45px #919191,-10px -10px 45px #ffffff' }}>
                        <div className="card-body">
                            <div style={{ height: '450px' }}>
                                <div className="card-body" >
                                    <div className="row">
                                        <table className="table table-bordered" style={{ textAlign: 'center' }}>
                                            <thead className="thead-light" >
                                                <tr>
                                                    <th scope="col" className="w-25">Heading</th>
                                                    <th scope="col" className="w-50">Details</th>
                                                    <th scope="col" className="w-15">Edit</th>
                                                    <th scope="col" className="w-15">Delete</th>
                                                </tr>
                                            </thead>
                                            {this.state?.termsAndconditions?.length > 0 && this.state.termsAndconditions.map((item, index) =>
                                                <tbody key={index}>
                                                    <tr>
                                                        <td>{item.heading}</td>
                                                        <td>{item.details}</td>
                                                        <td>
                                                            <button type="button" className="btn btn-outline-success" onClick={() => this.updateTermsAndConditions(item._id, item.heading, item.details)}>
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
                </div>
            </div>
        );
    }
}

export default ViewTermsAndConditionsBody;