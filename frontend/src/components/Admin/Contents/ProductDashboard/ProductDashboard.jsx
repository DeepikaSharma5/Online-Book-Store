import React, { Component } from "react";
import axios from "axios";

class ProductDashboard extends React.Component {
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
          categories: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:6060/book/view")
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="container col-sm-5">
          <br></br>
          <h1> Product Dashboard </h1>
          <span>
            {" "}
            <i> This is the homepage of the product dashboard </i>{" "}
          </span>
          <br></br>
          <br></br>
          <br></br>

          <div class="container">
            <div className="row mb-3">
              <div className="col mb-3">    
                <a href="http://localhost:3000/admin-add-book">  
                  <button type="button" class="btn btn-info btn-lg btn-block" style={{height: "100px"}} >Add Books</button> 
                </a>
              </div>
              <div className="col mb-3">  
                <a href="http://localhost:3000/admin-view-book">               
                  <button type="button" class="btn btn-info btn-lg btn-block" style={{height: "100px"}}>Manage Books</button>
                </a>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col mb-3">    
                <a href="http://localhost:3000/admin-add-category">             
                  <button type="button" class="btn btn-info btn-lg btn-block"style={{height: "100px"}}>Add Categories</button>
                </a>
              </div>
              <div className="col mb-3"> 
                <a href="http://localhost:3000/admin-view-category">                
                  <button type="button" class="btn btn-info btn-lg btn-block"style={{height: "100px"}}>Manage Categories</button>
                </a>
              </div>
            </div>
          </div>

          <div class="card border-dark mb-3">
            <div class="card-header"> Summary </div>
          </div>

          <div class="container">
            <div class="row row-cols-1">
              <div class="card text-white bg-primary mb-3">
                <div class="card-body">
                  <h5 class="card-title">Total no of books added</h5>
                  <p class="card-text"> {this.state.books.length} </p>
                </div>
              </div>
              <div class="card text-white bg-success mb-3">
                <div class="card-body">
                  <h5 class="card-title">Total no of categories added</h5>
                  <p class="card-text"> {this.state.categories.length} </p>
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

export default ProductDashboard;
