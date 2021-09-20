import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { APP_ROUTES } from '../../../utilities/constants/routes.constants';
import Header from '../Homepage/Header/Header';


export default function SearchBooksBody() {
    
    const [categories, getCategories] = useState([]);
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    const [searchValue, setSearchValue] = useState(reactLocalStorage.getObject('SearchValue'));
    const [condition, setCondition] = useState(false);
    const [loading, setLoading] = useState(true);

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
        setLoading(false);  
        let searchbar_result = [];
        searchbar_result = allData.filter((data) => {
            let data_title = data.title.toLowerCase();
            return data_title.search(searchValue) != -1;
        });        
        if( searchbar_result.length==0 ){
            setCondition(true);
            setLoading(false);
        };
        setFilteredData(searchbar_result); 
    }

    const handleSearch = (event) => {            
        setCondition(false);     
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
            let data_title = data.title.toLowerCase();
            return data_title.search(value) != -1;
        });
        if( result.length==0 ){
            setCondition(true);            
        };
        setFilteredData(result);     
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
      <div className="container" onMouseMove={getSearchBarResults} style={{ maxWidth: '90rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff'}}>
        <div>
            <Header/>
        </div>
        <br></br><br></br>
        <div className="row">               
        <div className="col-5 col-md-3" style={{paddingTop:'55px'}}>
                <div className="card text-dark bg-light mb-3 ">
                    <div className="card-body" style={{width:'400px', height:'auto'}}>
                        <h5> Search by Book Name </h5>
                        <input style={{width:'300px', height:'40px'}}
                            type = "text"
                            onChange={(event) =>handleSearch(event)}
                            placeholder="Type something to search"
                        /> 
                    </div>
                </div>    
                <br></br>
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
                        {loading ? ( 
                            <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                            </div>
                        ) : (<i> </i>) }                        
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



  