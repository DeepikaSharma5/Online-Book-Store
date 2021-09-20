import React, { Component } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';
import Select from 'react-select';
import Swal from 'sweetalert2';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';

class UpdateCategoryBody extends Component {
    constructor(props) {
        super(props);        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onBookSelect = this.onBookSelect.bind(this);
        this.cancel = this.cancel.bind(this);
        this.state = {
            category_name:'',
            description:'',
            categoryID: reactLocalStorage.getObject('CategoryID'),
            allBooks: [],
            books:[],
            options: [],
            booksByCategory: [],
            alreadyAddedBooks: [],
            selectedBooks: []
          }
    }
    
    componentDidMount() {
        { /* Get method to get the particular cateogry details */ }
            axios.get('http://localhost:6060/category/view/' +  this.state.categoryID)
            .then(response => {
                const category_name = response.data.data.category_name;
                const description = response.data.data.description; 
                this.setState({category_name, description});  
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });   

            { /* Get method to get the all the books */ }
            axios.get('http://localhost:6060/book/view')
            .then(response => {
                this.setState({ allBooks: response.data.data}, () => {
                    let data = [];
                    this.state.allBooks.map((item, index) => {
                        let book = {
                            value: item._id, 
                            label: item.title
                        }
                        data.push(book)
                    })
                    this.setState({options: data});
                })   
            });

            { /* Get method to get the books already added to the db */ }
            axios.get('http://localhost:6060/category/view/' +  this.state.categoryID)
            .then(response => {
                this.setState({ booksByCategory: response.data.data.books}, () => {
                    let data = [];
                    this.state.booksByCategory.map((item, index) => {
                        let addedBook = {
                            value: item._id, 
                            label: item.title
                        }
                        data.push(addedBook)
                    })
                    this.setState({alreadyAddedBooks: data});                    
                    this.setState({selectedBooks: data});
                })   
            });      
    }     
    
    cancel(){        
        window.location.href = APP_ROUTES.ADMIN_VIEW_CATEGORY;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onBookSelect(e) { 
        this.setState( {selectedBooks: e ? e.map(item =>item.value): []})      
    }
    
    onSubmit(e) {
        e.preventDefault();
        let updatedCategory = {
            category_name : this.state.category_name,
            description : this.state.description,
            books : this.state.selectedBooks
        }

        console.log('Data', updatedCategory);
        axios.post('http://localhost:6060/category/update/' + this.state.categoryID, updatedCategory)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Updation Successed!",
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
    
    render() {
    return (
        <div className="container">
                <br></br><br></br>
                <h1>Update Category Details </h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb"  style={{backgroundColor:'white'}}>
                        <li className="breadcrumb-item" style={{fontSize:"20px"}}> <a href="/admin-product-dashboard" style={{color:"#049191"}}> Product Dashboard</a></li>
                        <li className="breadcrumb-item" style={{fontSize:"20px"}}><a href="/admin-view-category" style={{color:"#049191"}} > Manage Categories </a></li>
                        <li className="breadcrumb-item active"style={{fontSize:"20px"}}  aria-current="page"> Update Categories</li>
                    </ol>
                </nav>
                <form onSubmit={this.onSubmit} >                     
                    <div className="row row-cols-2">                        
                        <div className="col">
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
                            <p>Assign books</p>
                            <Select
                                isMulti
                                name="updateBooks"            
                                onChange={this.onBookSelect}
                                options={this.state.options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                            <br></br>
                            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                                <button type="button" className="btn btn-outline-danger" style={{ float: 'right', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={this.cancel}><Backspace /> Cancel</button>
                                <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }}><Folder /> Submit </button>
                            </div>
                        </div> 
                        <div className="col card bg-light" style={{width:"400px", margin:'auto'}}>
                            <br></br>
                            <p style={{fontSize:'20px', margin:'auto'}} > <b> Added Books </b> </p>    
                            <hr></hr>
                            {this.state.booksByCategory.length > 0 && this.state.booksByCategory.map((item, index) =>
                            <div className="col text-center" style={{fontSize:'15px'}}>    
                                <div key={index}>
                                    <p> {item.title} </p>
                                </div>
                            </div>                        
                            )}
                        </div>
                    </div>                        
                </form>
            </div>
        );

    }
}
 
export default UpdateCategoryBody;