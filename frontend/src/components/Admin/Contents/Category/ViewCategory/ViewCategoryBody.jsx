import React, { Component } from 'react';
import { Trash, Pencil, PlusLg } from 'react-bootstrap-icons';
import axios from 'axios';
import Swal from 'sweetalert2';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Folder, XCircle, Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../../../utilities/constants/routes.constants';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

class ViewCategoryBody extends Component {
  constructor(props) {
    super(props);
    this.deleteData = this.deleteData.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
    this.state = {
        categories: [],
        count:1 
    }
}

componentWillMount() {
    this.getChartData();
  }

componentDidMount() {
    axios.get('http://localhost:6060/category/view')
        .then(response => {
            const categories = response.data.data;           
            this.setState({ categories });
            console.log("response", response);
        }).catch(error => {
            alert(error.message);
            console.log("Error", error);
        });
   
}


getChartData() {
    this.setState({
      data: {
        datasets: [
          {
            label: "complete",
            data: [60, 40],
            backgroundColor: ["#0f4c75", "#3282b8"],
          },
        ],
      },
    });
}


generatePDF = (e) => {
    const doc = new jsPDF();
    const tableColumns = ["No", "Category Name", "Description"];
    const tableRows = [];  

    this.state.categories.forEach(category => {
        const categoryData = [
            this.state.count,
            category.category_name,
            category.description
        ];
        this.state.count = this.state.count + 1;
        tableRows.push(categoryData);
    }); 
    
    
    this.state.count = 1;

    doc.autoTable(tableColumns, tableRows, { startY: 20 });
    const date = Date().split(" ");
    const dateStr = date[0] + " " + date[1] + " " + date[2] + " " + date[3] + " " + date[4];
    doc.text("BookLab : Report of category list for " + dateStr , 14, 15);
    doc.save(`Category List Report - ${dateStr}.pdf`);
}

deleteData(id) {
    axios.delete('http://localhost:6060/category/delete/' + id)
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
                            window.location.href = APP_ROUTES.ADMIN_VIEW_CATEGORY;
                        }
                    });
                }
            });
        }).catch((err) => {
            Swal.fire({
                title: "error!",
                text: "Category Deleting Not Success",
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

updateCategories(id) {
    reactLocalStorage.setObject("CategoryID", [id]);
    window.location.href = APP_ROUTES.ADMIN_UPDATE_CATEGORY;
}


render() {
    return (
        <div>
            <div className="card card border border-light shadow-0 mb-3" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px', marginRight:"50px" }}>
                <br></br><br></br>
                <h1>List of Categories</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb"  style={{backgroundColor:'white'}}>
                        <li className="breadcrumb-item" style={{fontSize:"20px"}}> <a href="/admin-product-dashboard" style={{color:"#049191"}}> Product Dashboard</a></li>
                        <li className="breadcrumb-item active"style={{fontSize:"20px"}}  aria-current="page">Manage Categories</li>
                    </ol>
                </nav>
                <hr></hr>
                <div>
                    <button type="button" className="btn btn-outline-secondary" style={{ float: 'right', padding: '12px 28px', marginBottom:'30px' }} onClick={() => { window.location.href = APP_ROUTES.ADMIN_ADD_CATEGORY }}>
                        <PlusLg /> Add New Category
                    </button>
                    <button type="submit" className="btn btn-outline-success" style={{ float: 'left', padding: '12px 28px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%" }} onClick={() => { this.generatePDF() }} ><Folder /> Generate Category Report </button>
                </div>
                <div className="card overflow-auto" style={{ maxHeight: '300%',background:'#ffffff'}}>
                    <div className="card-body">
                        <div style={{ height: 'auto' }}>
                            <div className="card-body" >
                                <div className="row">
                                    <table className="table table-bordered" style={{ textAlign: 'center' }}>
                                        <thead className="thead-light" >
                                            <tr>
                                                <th scope="col" className="w-25">Category Name</th>                                              
                                                <th scope="col" className="w-25">Description</th>                 
                                                <th scope="col" className="w-15">Edit</th>
                                                <th scope="col" className="w-15">Delete</th>
                                            </tr>
                                        </thead>
                                        {this.state?.categories?.length > 0 && this.state.categories.map((item, index) =>
                                            <tbody key={index}>
                                                <tr>
                                                    <td>{item.category_name}</td>
                                                    <td>{item.description}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-outline-success" onClick={() => this.updateCategories(item._id)}>
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

export default ViewCategoryBody;