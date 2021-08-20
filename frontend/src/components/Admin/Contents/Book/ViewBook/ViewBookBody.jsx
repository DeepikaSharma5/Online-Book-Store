import React, { Component } from 'react';
import { Trash, Pencil, PlusLg } from 'react-bootstrap-icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';

class ViewBookBody extends Component {
  constructor(props) {
    super(props);
    this.deleteData = this.deleteData.bind(this);
    this.updateBooks = this.updateBooks.bind(this);
    this.state = {
        books: []
    }
}

componentDidMount() {
    axios.get('http://localhost:6060/book/view')
        .then(response => {
            const books = response.data.data;
            this.setState({ books });
            console.log("response", response);
        }).catch(error => {
            alert(error.message);
            console.log("Error", error);
        });
}

deleteData(id) {
    axios.delete('http://localhost:6060/book/delete/' + id)
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
                    .then(okay => {
                        if (okay) {
                            window.location.href = APP_ROUTES.ADMIN_VIEW_BOOK;
                        }
                    });
                }
            });
        }).catch((err) => {
            Swal.fire({
                title: "error!",
                text: "Book details Deleting Not Success",
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

updateBooks(id, title, author_name, publisher, year, isbn, description, price) {
    reactLocalStorage.setObject("Books", [id, title, author_name, publisher, year, isbn, description, price]);
    window.location.href = APP_ROUTES.ADMIN_UPDATE_BOOK;
}


render() {
    return (
        <div>
            <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px', marginRight:'50px' }}>
                <br></br>
                <h1>List of Books</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb"  style={{backgroundColor:'white'}}>
                        <li class="breadcrumb-item" style={{fontSize:"20px"}}> <a href="/admin-product-dashboard" style={{color:"#049191"}}> Product Dashboard</a></li>
                        <li class="breadcrumb-item active"style={{fontSize:"20px"}}  aria-current="page">Manage Books</li>
                    </ol>
                </nav>
                <hr></hr>
                <div>
                    <button type="button" className="btn btn-outline-secondary" style={{ float: 'right', padding: '12px 28px', marginBottom:'30px' }} onClick={() => { window.location.href = APP_ROUTES.ADMIN_ADD_BOOK }}>
                        <PlusLg /> Add New Book
                    </button>
                    <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} ><Folder /> Generate Book Report </button>
                </div>
                <div className="card overflow-auto" style={{ maxHeight: '300%',background:'#ffffff'}}>
                    <div className="card-body">
                        <div style={{ height: 'auto' }}>
                            <div className="card-body" >
                                <div className="row">
                                    <table className="table table-bordered" style={{ textAlign: 'center' }}>
                                        <thead className="thead-light" >
                                            <tr>
                                                <th scope="col" className="w-25">Title</th>
                                                <th scope="col" className="w-10">Author Name</th>
                                                <th scope="col" className="w-25">Publisher</th>
                                                <th scope="col" className="w-10">Year</th>
                                                <th scope="col" className="w-10">ISBN</th>                                                
                                                <th scope="col" className="w-100">Description</th>                                         
                                                <th scope="col" className="w-25">Price</th>                                        
                                                <th scope="col" className="w-10">Image</th>  
                                                <th scope="col" className="w-15">Edit</th>
                                                <th scope="col" className="w-15">Delete</th>
                                            </tr>
                                        </thead>
                                        {this.state?.books?.length > 0 && this.state.books.map((item, index) =>
                                            <tbody key={index}>
                                                <tr>
                                                    <td>{item.title}</td>
                                                    <td>{item.author_name}</td>
                                                    <td>{item.publisher}</td>
                                                    <td>{item.year}</td>
                                                    <td>{item.isbn}</td>
                                                    <td>{item.description}</td>
                                                    <td>Rs.{item.price}.00</td>
                                                    <td> <img className="card-img-top " style={{ width: '100px' }} src={item.image}/> </td>
                                                    <td>
                                                        <button type="button" className="btn btn-outline-success" onClick={() => this.updateBooks(item._id, item.title, item.author_name, item.publisher, item.year, item.isbn, item.description, item.price)}>
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

export default ViewBookBody;