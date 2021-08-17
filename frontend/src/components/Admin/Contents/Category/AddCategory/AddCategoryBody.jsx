import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';

class AddCategoryBody extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClear = this.onClear.bind(this);
        this.state = {
            category_name: '',
            description: ''
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e) {
        e.preventDefault();
        let AddCategory = {
            category_name: this.state.category_name,
            description: this.state.description
        }
        console.log('Data', AddCategory);
        axios.post('http://localhost:6060/category/add', AddCategory)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Added Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = APP_ROUTES.ADMIN_VIEW_CATEGORY;
                    }
                });

            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Not Success",
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

    onClear(e){
        this.setState= {
            category_name: '',
            description: ''
        }
    }

    render() {
        return (
            <div className="container">
                <br></br><br></br>
                <h1>Add Category Details </h1>
                <br></br>
                <form onSubmit={this.onSubmit} > 
                    <div className="mb-3"> 
                        <label for="inputCategoryName" className="form-label">Category Name</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="category_name" 
                            name="category_name"         
                            value={this.state.category_name}
                            onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="inputDescription" className="form-label">Description</label>
                        <textarea 
                            type="text" 
                            className="form-control" 
                            id="description" 
                            name="description" 
                            rows="3"
                            value={this.state.description}
                            style={{height: "100px"}}
                            onChange={this.onChange}/>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br></br><br></br>
                </form>
            </div>
        );
    }
}

export default AddCategoryBody;