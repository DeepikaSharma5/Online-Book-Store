import React, { Component } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../utilities/constants/routes.constants';

class ViewBookByCategoryBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            categoryID:'',
            category_name:''
          }
    }
    
    componentDidMount() {
        const categoryID = reactLocalStorage.getObject('CategoryID'); 
        axios.get('http://localhost:6060/category/view/' + categoryID)
            .then(response => {
                const books = response.data.data.books;
                const category_name = response.data.data.category_name;             
                this.setState({ books , category_name});  
                console.log("response", response);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });   

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

    
    navigatePage(e, _id) {
        reactLocalStorage.setObject("CategoryID", [_id]);  
        window.location.href = APP_ROUTES.USER_VIEW_BY_CATEGORY;
    }

    viewBook(id, title, author_name, publisher, year, isbn, description, price, image) {
        reactLocalStorage.setObject("Book", [id, title, author_name, publisher, year, isbn, description, price, image]);  
        window.location.href = APP_ROUTES.PRODUCT_PAGE;
    }

    navigateToBooks() {
        window.location.href = APP_ROUTES.BOOKS;
    }

    render() {
    return (
        <div className="container" style={{ maxWidth: '90rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff'}}>
                <br></br><br></br>
                <div className="row">
                    <div className="col-4 col-md-2">
                        <div className="card text-dark bg-light mb-3 ">
                            <div className="card-body" style={{width:'auto', height:'auto'}}>
                                <h5> Categories List </h5>
                                <hr></hr>
                                <button type="button" className="btn btn-outline-dark" style={{width:'auto','height':'auto', 'marginBottom':'5px'}} 
                                    onClick={() => this.navigateToBooks()}>
                                    All Books
                                </button>
                                {this.state.categories.length > 0 && this.state.categories.map((item, index) => (
                                    <div className="col" style={{"marginLeft":"-15px"}}>    
                                        <div key={index} >       
                                            <button type="button" className="btn btn-outline-dark" style={{width:'auto','height':'auto', 'marginBottom':'-20px'}} 
                                                onClick={e=>this.navigatePage(e, item._id)}>
                                                {item.category_name}
                                            </button>
                                        </div>    
                                    <br></br>   
                                </div>        
                                    
                                ))} 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10" style={{'paddingLeft': '30px'}}>
                        <h1>  <b>  {this.state.category_name}  </b>  </h1>  
                        <div className="card text-dark bg-light mb-3 ">
                            <div className="card-body" >             
                                <div className="row row-cols-5" style={{'marginBottom':'15px'}}>
                                    {this.state.books.length > 0 && this.state.books.map((item, index) => (
                                        <div className="col">    
                                            <div key={index} className="card shadow" style={{width:'13rem', height:'34rem'}}>
                                                <img className="card-img-top" src={item.image} style={{'width':'100%', height:'17rem'}} alt="Card image cap"/>
                                                <div className="card-body" style={{height:'15rem'}}>
                                                    <h5 className="card-title"> {item.title} </h5>                                              
                                                    <br></br>
                                                </div>
                                                <div className="card-footer"  style={{'backgroundColor':'white'}}>
                                                    <h5 className="card-text" style={{'color':'#069999'}} > <b> LKR {item.price}.00 </b> </h5>
                                                </div>
                                                <div className="card-footer"  style={{'backgroundColor':'#069999'}}>
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
                <br></br>
            </div>
        );

    }
}
 
export default ViewBookByCategoryBody;