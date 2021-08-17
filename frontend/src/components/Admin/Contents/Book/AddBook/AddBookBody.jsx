import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Select from 'react-select';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';

class AddBookBody extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCategorySelect = this.onCategorySelect.bind(this);
        this.state = {
            title: '',
            author_name: '',
            publisher: '',
            year: '',
            isbn: '',
            description: '',
            categories: [],
            options: [],
            selectedCategories: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:6060/category/view')
        .then(response => {
            this.setState({ categories: response.data.data}, () => {
                let data = [];
                this.state.categories.map((item, index) => {
                    let category = {
                        value: item._id, 
                        label: item.category_name
                    }
                    data.push(category)
                })
                this.setState({options: data});
            })   
        })
        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onCategorySelect(e) {
        this.setState( { selectedCategories: e ? e.map(item =>item.value) : [] })
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
            categories: this.state.selectedCategories
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
                        <label for="inputTitle" className="form-label">Title</label>
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
                            <label for="inputAuthorName" className="form-label">Author Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="author_name" 
                                name="author_name" 
                                value={this.state.author_name}
                                onChange={this.onChange}/>
                        </div>
                        <div className="col mb-3">
                            <label for="inputPublisher" className="form-label">Publisher Name</label>
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
                            <label for="inputYear" className="form-label">Year</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="year" 
                                name="year" 
                                value={this.state.year}
                                onChange={this.onChange}/>
                        </div>
                        <div className="col mb-3">
                            <label for="inputIsbn" className="form-label">ISBN</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="isbn" 
                                name="isbn" 
                                value={this.state.isbn}
                                onChange={this.onChange}/>
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
                            value={this.state.description}
                            style={{height: "100px"}}
                            onChange={this.onChange}/>
                    </div>
                    <p>Select category</p>
                    <Select
                        isMulti
                        name="categories"
                        onChange={this.onCategorySelect}
                        options={this.state.options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br></br><br></br>
                </form>
            </div>
        );
    }
}

export default AddBookBody;