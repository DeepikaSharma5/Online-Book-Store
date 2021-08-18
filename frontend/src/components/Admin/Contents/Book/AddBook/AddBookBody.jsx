import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';
import UploadImage from './UploadImage';

class AddBookBody extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: '',
            author_name: '',
            publisher: '',
            year: '',
            isbn: '',
            description: '',
            price:0,
            image: ''
        }
    }

    componentDidMount(){        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };
    
    onSubmit(e) {
        e.preventDefault();
        let AddBook = {
            title: this.state.title,
            author_name: this.state.author_name,
            publisher: this.state.publisher,
            year: this.state.year,
            isbn: this.state.isbn,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image
        }
        console.log('Data', AddBook);
        axios.post('http://localhost:6060/book/add', AddBook)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Added Successed!",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = APP_ROUTES.ADMIN_VIEW_BOOK;
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

    render() {
        return (
            <div className="container">
                <br></br><br></br>
                <h1>Add Book Details </h1>
                <br></br>
                <form onSubmit={this.onSubmit} > 
                    <div className="mb-3"> 
                        <b><label for="inputTitle" className="form-label">Title</label></b>
                        <input 
                            type="text"
                            className="form-control" 
                            id="title" 
                            name="title"         
                            value={this.state.title}
                            onChange={this.onChange} />
                    </div>
                    <div className="row mb-3">                        
                        <div className="col mb-3">
                            <b><label for="inputAuthorName" className="form-label">Author Name</label></b>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="author_name" 
                                name="author_name" 
                                value={this.state.author_name}
                                onChange={this.onChange}/>
                        </div>
                        <div className="col mb-3">
                            <b><label for="inputPublisher" className="form-label">Publisher Name</label></b>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="publisher" 
                                name="publisher" 
                                value={this.state.publisher}
                                onChange={this.onChange}/>
                        </div>
                    </div>   
                    <div className="row mb-3">                        
                        <div className="col mb-3">
                            <b><label for="inputYear" className="form-label">Year</label></b>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="year" 
                                name="year" 
                                value={this.state.year}
                                onChange={this.onChange}/>
                        </div>
                        <div className="col mb-3">
                            <b><label for="inputIsbn" className="form-label">ISBN</label></b>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="isbn" 
                                name="isbn" 
                                value={this.state.isbn}
                                onChange={this.onChange}/>
                        </div>  
                    </div> 
                    <div className="row mb-3">                        
                        <div className="col mb-3">
                            <b><label for="inputPrice" className="form-label">Price</label></b>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="price" 
                                name="price" 
                                value={this.state.price}
                                style={{width: "300px"}}
                                onChange={this.onChange}/>
                        </div>                        
                    </div>   
                    <div className="mb-3">
                        <b><label for="inputDescription" className="form-label">Description</label></b>
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
                    <hr></hr>
                    <b><p>Upload Image</p></b>
                    <div>
                        <UploadImage/>
                    </div>
                    <div className="mb-3"> 
                        <b><label for="inputImage" className="form-label">Image Url</label></b>
                        <input 
                            type="text"
                            className="form-control" 
                            id="image" 
                            name="image"         
                            value={this.state.image}
                            onChange={this.onChange} />
                    </div>
                    <hr></hr>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br></br><br></br>
                </form>
            </div>
        );
    }
}

export default AddBookBody;