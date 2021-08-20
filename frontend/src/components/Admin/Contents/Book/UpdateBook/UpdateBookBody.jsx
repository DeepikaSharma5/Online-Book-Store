import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';

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

    function updateBooks(e) {
        e.preventDefault();
        const newUpdateBooks = {
            title,
            author_name,
            publisher,
            year,
            isbn,
            description,
            price
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
        }


    return (
        <div className="col-md-14 col-sm-12" style={{ maxWidth: '70rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff'}}>
            <br></br><br></br>
                <h1>Update Book Details </h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb"  style={{backgroundColor:'white'}}>
                        <li class="breadcrumb-item" style={{fontSize:"20px"}}> <a href="/admin-product-dashboard" style={{color:"#049191"}}> Product Dashboard</a></li>
                        <li class="breadcrumb-item" style={{fontSize:"20px"}}><a href="/admin-view-book" style={{color:"#049191"}} > Manage Books </a></li>
                        <li class="breadcrumb-item active"style={{fontSize:"20px"}}  aria-current="page">Update Book Details</li>
                    </ol>
                </nav>
                <hr></hr>
            <div className="col" style={{ borderRadius: '33px', height: '590px' }}>
                <form id="UpdateForm" style={{ paddingTop: "10px" }}>
                    <div className="mb-3"> 
                        <label for="inputTitle" className="form-label">Title</label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="title" 
                            name="title"         
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="row mb-3">                        
                        <div className="col mb-3">
                            <label for="inputAuthorName" className="form-label">Author Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="author_name" 
                                name="author_name" 
                                value={author_name}                               
                                onChange={(e) => { setAuthorName(e.target.value) }}/>
                        </div>
                        <div className="col mb-3">
                            <label for="inputPublisher" className="form-label">Publisher Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="publisher" 
                                name="publisher" 
                                value={publisher}
                                onChange={(e) => { setPublisher(e.target.value) }}/>
                        </div>
                    </div>   
                    <div className="row mb-3">                        
                        <div className="col mb-3">
                            <label for="inputYear" className="form-label">Year</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="year" 
                                name="year" 
                                value={year}
                                onChange={(e) => { setYear(e.target.value) }}/>
                        </div>
                        <div className="col mb-3">
                            <label for="inputIsbn" className="form-label">ISBN</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="isbn" 
                                name="isbn" 
                                value={isbn}
                                onChange={(e) => { setIsbn(e.target.value) }}/>
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
                                value={price}
                                style={{width: "300px"}}
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
