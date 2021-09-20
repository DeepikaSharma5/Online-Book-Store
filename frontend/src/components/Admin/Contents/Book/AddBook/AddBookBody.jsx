import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';
import UploadImage from './UploadImage';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';

class AddBookBody extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
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
    
    cancel(){        
        window.location.href = APP_ROUTES.ADMIN_VIEW_BOOK;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    uploadImage = async(e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "spmproject");
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dpil2pifv/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json();
        this.state.image = file.secure_url;
    }
    
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
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb"  style={{backgroundColor:'white'}}>
                        <li className="breadcrumb-item" style={{fontSize:"20px"}}> <a href="/admin-product-dashboard" style={{color:"#049191"}}> Product Dashboard</a></li>
                        <li className="breadcrumb-item active"style={{fontSize:"20px"}}  aria-current="page">Add Books</li>
                    </ol>
                </nav>
                <hr></hr>
                <form onSubmit={this.onSubmit} > 
                    <div className="row mb-3">                        
                        <div className="col mb-3"> 
                            <b><label for="inputTitle" className="form-label">Title</label></b>
                            <input 
                                type="text"
                                className="form-control" 
                                id="title" 
                                name="title"         
                                value={this.state.title}
                                placeholder='Enter title'
                                onChange={this.onChange} />
                        </div>
                        <div className="col mb-3">
                            <b><label for="inputAuthorName" className="form-label">Author Name</label></b>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="author_name" 
                                name="author_name" 
                                value={this.state.author_name}
                                placeholder='Enter author name'
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
                                placeholder='Enter publisher'
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
                                placeholder='Enter year'
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
                                placeholder='Enter ISBN'
                                onChange={this.onChange}/>
                        </div> 
                        <div className="col mb-3">
                            <b><label for="inputPrice" className="form-label">Price</label></b>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="price" 
                                name="price" 
                                value={this.state.price}
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
                            placeholder='Enter description'
                            style={{height: "70px"}}
                            onChange={this.onChange}/>
                    </div>
                    <hr></hr>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="customFile">Upload Image Here </label>
                        <input type="file" onChange={this.uploadImage} className="form-control" id="customFile" />
                    </div>
                    <hr></hr>                    
                    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                        <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={this.cancel}><Backspace /> Cancel</button>
                        <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }}><Folder /> Submit </button>
                    </div>
                    <br></br><br></br>
                </form>
            </div>
        );
    }
}

export default AddBookBody;