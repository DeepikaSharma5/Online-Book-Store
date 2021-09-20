import React, { Component } from "react";
import axios from "axios";

class ProductDashboardBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      categories: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:6060/category/view")
      .then((res) => {
        this.setState({
          categories: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:6060/book/view")
      .then((res) => {
        this.setState({
          books: res.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="container col-sm-7">
          <br></br>
          <br></br>
          <h1>  Product Dashboard </h1>
          <hr></hr>
          <br></br>          
          <br></br>
      
          <div className="container">
            <div className="row mb-3">
              <div className="col mb-3">    
                <a href="http://localhost:3000/admin-add-book">  
                  <button type="button" className="btn btn-outline-dark shadow" style={{height: "100px", width:"350px"}} >Add Books</button> 
                </a>
              </div>
              <div className="col mb-3">  
                <a href="http://localhost:3000/admin-view-book">               
                  <button type="button" className="btn btn-outline-dark shadow" style={{height: "100px", width:"350px"}}>Manage Books</button>
                </a>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col mb-3">    
                <a href="http://localhost:3000/admin-add-category">             
                  <button type="button" className="btn btn-outline-dark shadow"style={{height: "100px", width:"350px"}}>Add Categories</button>
                </a>
              </div>
              <div className="col mb-3"> 
                <a href="http://localhost:3000/admin-view-category">                
                  <button type="button" className="btn btn-outline-dark shadow"style={{height: "100px", width:"350px"}}>Manage Categories</button>
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <hr></hr>
          <h4> Summary Section</h4>
          <hr></hr><br></br>
          <div className="container">
            <div className="row row-cols-2">
                <div className="col"> 
                    <div className="card text-white  mb-3" style={{backgroundColor:"#049191", color:"white"}}>
                        <div className="card-body">
                        <h5 className="card-title">Total no of books added</h5>
                        <h2 className="card-text"> {this.state.books.length} </h2>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white text-right mb-3"  style={{backgroundColor:"#049191", color:"white"}}>
                        <div className="card-body">
                        <h5 className="card-title">Total no of categories added</h5>
                        <h2 className="card-text"> {this.state.categories.length} </h2>
                        </div>
                    </div>
                </div>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDashboardBody;
