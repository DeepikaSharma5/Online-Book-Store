import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';
import UploadImage from '../AddBook/UploadImage';

export default function UpdateBookBody() {

    var Books = reactLocalStorage.getObject('Books');
    const id = Books[0];
    const [title, setTitle] = useState(Books[1]);
    const [author_name, setAuthorName] = useState(Books[2]);
    const [publisher, setPublisher] = useState(Books[3]);
    const [year, setYear] = useState(Books[4]);
    const [isbn, setIsbn] = useState(Books[5]);
    const [description, setDescription] = useState(Books[6]);
    const [price, setPrice] = useState(Books[7]);
    const [image, setImage] = useState(Books[8]);

    function updateBooks(e) {
        e.preventDefault();
        const newUpdateBooks = {
            title,
            author_name,
            publisher,
            year,
            isbn,
            description,
            price, 
            image
        }
        axios.post("http://localhost:6060/book/update/" + id, newUpdateBooks)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Book has been updated',
                    showConfirmButton: false,
                    timer: 2000
                }).then(okay => {
                    if (okay) {
                        window.location.href = APP_ROUTES.ADMIN_VIEW_BOOK;
                    }
                });

            }).catch((err) => {
                Swal.fire({
                    title: "error!",
                    text: "Update Not Success",
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
        
        const uploadImage = async(e) => {
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
            setImage(file.secure_url);
        }

        function cancel () {
            window.location.href = APP_ROUTES.ADMIN_VIEW_BOOK;
        }

        function reset (){
            setTitle(" ");
            setAuthorName(" ");
            setPublisher(" ");
            setYear(" ");
            setIsbn(" ");
            setDescription(" ");
            setPrice(0);
            setImage(" ");
        }

    return (
        <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff'}}>
            <br></br><br></br>
                <h1>Update Book Details </h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb"  style={{backgroundColor:'white'}}>
                        <li className="breadcrumb-item" style={{fontSize:"20px"}}> <a href="/admin-product-dashboard" style={{color:"#049191"}}> Product Dashboard</a></li>
                        <li className="breadcrumb-item" style={{fontSize:"20px"}}><a href="/admin-view-book" style={{color:"#049191"}} > Manage Books </a></li>
                        <li className="breadcrumb-item active"style={{fontSize:"20px"}}  aria-current="page">Update Book Details</li>
                    </ol>
                </nav>
                <hr></hr>
            <div className="col" style={{ borderRadius: '33px', height: '590px' }}>
                <form id="UpdateForm" style={{ paddingTop: "10px" }}>
                <div className="row mb-3">                        
                        <div className="col mb-3"> 
                            <b><label for="inputTitle" className="form-label">Title</label></b>
                            <input 
                                type="text"
                                className="form-control" 
                                id="title" 
                                name="title"                                  
                                placeholder='Enter Title'       
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }} />
                        </div>
                        <div className="col mb-3">
                            <b><label for="inputAuthorName" className="form-label">Author Name</label></b>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="author_name" 
                                name="author_name" 
                                value={author_name}
                                placeholder='Enter author name'
                                onChange={(e) => { setAuthorName(e.target.value) }}/>
                        </div>
                        <div className="col mb-3">
                            <b><label for="inputPublisher" className="form-label">Publisher Name</label></b>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="publisher" 
                                name="publisher" 
                                value={publisher}                                
                                placeholder='Enter publisher'
                                onChange={(e) => { setPublisher(e.target.value) }}/>
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
                                value={year}
                                placeholder='Enter year'
                                onChange={(e) => { setYear(e.target.value) }} />
                        </div>
                        <div className="col mb-3">
                            <b><label for="inputIsbn" className="form-label">ISBN</label></b>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="isbn" 
                                name="isbn" 
                                value={isbn}
                                placeholder='Enter ISBN'
                                onChange={(e) => { setYear(e.target.value) }}/>
                        </div> 
                        <div className="col mb-3">
                            <b><label for="inputPrice" className="form-label">Price</label></b>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="price" 
                                name="price" 
                                value={price}
                                onChange={(e) => { setPrice(e.target.value) }}/>
                        </div>    
                    </div>   
                    <div className="mb-3">
                        <label for="inputDescription" className="form-label">Description</label>
                        <textarea 
                            type="text" 
                            className="form-control" 
                            id="description" 
                            name="description" 
                            rows="3"
                            value={description}
                            style={{height: "100px"}}
                            onChange={(e) => { setDescription(e.target.value) }}/>
                    </div>                    
                    <hr></hr>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="customFile">Update Image Here </label>
                        <input 
                            type="file" 
                            onChange={ uploadImage } 
                            className="form-control" 
                            id="customFile" />
                    </div>
                    <hr></hr>    
                    <br></br><br></br>
                    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                        <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={cancel}><Backspace /> Cancel</button>
                        <button type="reset" className="btn btn-outline-primary" style={{ float: 'center',padding: '12px 68px', marginBottom:'30px', fontWeight:'bold', fontSize:"130%"  }} onClick={reset}><XCircle/> Clear</button>
                        <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={updateBooks}><Folder /> Save</button>
                    </div>
                </form>
            </div>
        </div>
    );

}
