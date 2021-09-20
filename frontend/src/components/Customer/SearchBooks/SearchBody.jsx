import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../utilities/constants/routes.constants';

export default function SearchBody() {
    
    const [categories, getCategories] = useState([]);
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    const [searchResults, setSearchResults] = useState(reactLocalStorage.getObject('SearchBooks'));
    const [condition, setCondition] = useState(false);
    var searchValue = reactLocalStorage.getObject('SearchValue');

    useEffect( () => {
        getAllCategories();        
        axios.get('http://localhost:6060/book/view')
        .then(response => {
            console.log("response", response);
            setAllData(response.data.data);
        }).catch(error => {
            alert(error.message);
            console.log("Error", error);
        });                 
        setFilteredData(searchResults); 
        
        console.log("searchResults", searchResults);
        getSearchBarResults();
    }, []);
 
    const getAllCategories = () => {  
        axios.get('http://localhost:6060/category/view')
            .then(response => {
                const categories = response.data.data; 
                console.log("response", response);
                getCategories(categories);
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
        })
    }

    const getSearchBarResults = () => {
        setCondition(false);
        if( searchResults.length==0 ){
            setCondition(true);
        };
        setFilteredData(searchResults); 
    }
      
    const navigatePage = (e,_id) => {
      reactLocalStorage.setObject("CategoryID", [_id]);  
      window.location.href = APP_ROUTES.USER_VIEW_BY_CATEGORY;
    }

    const viewBook = (id, title, author_name, publisher, year, isbn, description, price, image) => {
        reactLocalStorage.setObject("Book", [id, title, author_name, publisher, year, isbn, description, price, image]);  
        window.location.href = APP_ROUTES.PRODUCT_PAGE;
    }

    const navigateToBooks = () => {
        window.location.href = APP_ROUTES.BOOKS;
    }
  
    return (
      <div className="container" style={{ width:'auto', heigth:'auto' , margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff'}}>
        <div className="row">               
        <div className="col-5 col-md-3" style={{paddingTop:'55px'}}>         
                <div className="card text-dark bg-light mb-3 ">
                            <div className="card-body" style={{width:'auto', height:'auto'}}>
                                <h5> Categories List </h5>
                                <hr></hr>
                                <button type="button" className="btn btn-outline-dark" style={{width:'auto','height':'auto', 'marginBottom':'5px'}} 
                                    onClick={() => navigateToBooks()}>
                                    All Books
                                </button>
                                { categories.length > 0 &&  categories.map((item, index) => (
                                    <div className="col" style={{"marginLeft":"-15px"}}>    
                                        <div key={index} >       
                                            <button type="button" className="btn btn-outline-dark" style={{width:'auto','height':'auto', 'marginBottom':'-20px'}} 
                                                onClick={e=> navigatePage(e, item._id)} >
                                                    {item.category_name}
                                            </button>
                                        </div>    
                                    <br></br>   
                                </div>                                            
                                ))} 
                            </div>
                        </div>
            </div>                
            <div className="col-md-9" style={{'paddingLeft': '30px'}}>
                <br></br><br></br>
                <h3>  <b>  Search results related to </b> <i> {searchValue} </i>  </h3>  
                <div className="card text-dark bg-light mb-3 ">
                    <div className="card-body" >                                                 
                        {condition ? (
                        <i><h5> No Results Found...</h5></i>
                        ) : (
                          <div className="row row-cols-4" style={{'marginBottom':'15px'}}>                             
                            { filteredData.length > 0 && filteredData.map((value, index) => (
                                <div className="col">      
                                    <div key={index} className="card shadow" style={{width:'13rem', height:'34rem'}}>
                                        <img className="card-img-top" src={value.image} style={{'width':'100%', height:'17rem'}} alt="Card image cap"/>
                                        <div className="card-body" style={{height:'15rem'}}>
                                            <h5 className="card-title"> {value.title} </h5>                                              
                                            <br></br>
                                        </div>
                                        <div className="card-footer"  style={{'backgroundColor':'white'}}>
                                            <h5 className="card-text" style={{'color':'#069999'}} > <b> LKR {value.price}.00 </b> </h5>
                                        </div>
                                        <div className="card-footer"  style={{'backgroundColor':'#069999'}}>
                                            <button type="button" className="btn btn-lg" style={{'backgroundColor':'#069999', 'color':'white', textAlign:'center', width:'11rem'}} 
                                                onClick={() => viewBook(value._id, value.title, value.author_name, value.publisher, value.year, value.isbn, value.description, value.price, value.image)}>
                                                View Details 
                                            </button>
                                        </div>
                                    </div>                                     
                                <br></br>  
                                </div>                            
                            ))}                                       
                        </div>
                         )
                      } 
                        
                    </div>                                
                </div>       
            </div>
        </div>
        <br></br>
      </div>
    )
}



  