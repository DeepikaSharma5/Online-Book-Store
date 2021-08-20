import React, { Component } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../../utilities/constants/routes.constants';

class CategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        books:[],
        booksByCategory:[],
        categoryID:'611d2beb4f4c0f212c2f7be5' , 
        category_name:''
    }
}

componentDidMount() {

    const categoryID = reactLocalStorage.getObject('CategoryID'); 
        axios.get('http://localhost:6060/category/view/' + categoryID)
            .then(response => {
                const booksByCategory = response.data.data.books;
                const category_name = response.data.data.category_name;             
                this.setState({ booksByCategory , category_name});  
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });   


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

viewBook(id, title, author_name, publisher, year, isbn, description, price, image) {
    reactLocalStorage.setObject("Book", [id, title, author_name, publisher, year, isbn, description, price, image]);  
    window.location.href = APP_ROUTES.PRODUCT_PAGE;
}


render() {
    return (
        <div>
            <div className="row" style={{'paddingLeft':'60px','paddingRight':'30px'}}>
                <div className="card text-dark bg-light mb-3 " >
                    <div class="card-body" >
                        <h4> <b> Recently Added Books </b> </h4>
                        <br></br>                          
                            <div class="row row-cols-7" style={{'marginBottom':'15px',float:'left'}}>
                                {this.state.books.length > 0 && this.state.books.map((item, index) => (
                                    <div className="col">    
                                        <div key={index} class="card shadow" style={{width:'13rem', height:'34rem'}}>
                                            <img class="card-img-top" src={item.image} style={{'width':'100%', height:'17rem'}} alt="Card image cap"/>
                                            <div class="card-body" style={{height:'15rem'}}>
                                                <h5 class="card-title"> {item.title} </h5>                                              
                                                <br></br>
                                            </div>
                                            <div class="card-footer"  style={{'backgroundColor':'white'}}>
                                                <h5 class="card-text" style={{'color':'#069999'}} > <b> LKR {item.price}.00 </b> </h5>
                                            </div>
                                            <div class="card-footer"  style={{'backgroundColor':'#069999'}}>
                                                <button type="button" className="btn btn-lg" style={{'backgroundColor':'#069999', 'color':'white', textAlign:'center', width:'11rem'}} 
                                                    onClick={() => this.viewBook(item._id, item.title, item.author_name, item.publisher, item.year, item.isbn, item.description, item.price, item.image)}>
                                                    View Details
                                                </button>
                                            </div>
                                        </div>    
                                        <br></br>   
                                    </div>                             
                                ))}                                                 
                            </div>
                    </div>                                
                </div>            
            </div>
            <hr></hr>
            <div className="row" style={{'paddingLeft':'60px','paddingRight':'30px'}}>
            <div className="card text-dark bg-light mb-3 ">
                <div class="card-body" >
                    <h4> Recently Viewed Category: <b>  {this.state.category_name} </b> </h4>
                    <br></br>                          
                        <div class="row row-cols-7" style={{'marginBottom':'15px', float:'left'}}>
                            {this.state.booksByCategory.length > 0 && this.state.booksByCategory.map((item, index) => (
                                <div className="col">    
                                    <div key={index} class="card shadow" style={{width:'13rem', height:'34rem'}}>
                                        <img class="card-img-top" src={item.image} style={{'width':'100%', height:'17rem'}} alt="Card image cap"/>
                                        <div class="card-body" style={{height:'15rem'}}>
                                            <h5 class="card-title"> {item.title} </h5>                                              
                                            <br></br>
                                        </div>
                                        <div class="card-footer"  style={{'backgroundColor':'white'}}>
                                            <h5 class="card-text" style={{'color':'#069999'}} > <b> LKR {item.price}.00 </b> </h5>
                                        </div>
                                        <div class="card-footer"  style={{'backgroundColor':'#069999'}}>
                                            <button type="button" className="btn btn-lg" style={{'backgroundColor':'#069999', 'color':'white', textAlign:'center', width:'11rem'}} 
                                                onClick={() => this.viewBook(item._id, item.title, item.author_name, item.publisher, item.year, item.isbn, item.description, item.price, item.image)}>
                                                View Details
                                            </button>
                                        </div>
                                    </div>    
                                    <br></br>   
                                </div>                             
                            ))}                                                 
                        </div>
                </div>                                
            </div>        
        </div>
    </div>
    );
}
}

export default CategoryContainer;