import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { addToCart } from "../../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";


const ProductPageBody =({match,history}) => {

    var Book = reactLocalStorage.getObject('Book');
    const id = Book[0];
    const [title, setTitle] = useState(Book[1]);
    const [author_name, setAuthorName] = useState(Book[2]);
    const [publisher, setPublisher] = useState(Book[3]);
    const [year, setYear] = useState(Book[4]);
    const [isbn, setIsbn] = useState(Book[5]);
    const [description, setDescription] = useState(Book[6]);
    const [price, setPrice] = useState(Book[7]);
    const [image, setImage] = useState(Book[8]);

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(id));
        console.log("this is" + id);
      };

    return (
        <div className="container" style={{ maxWidth: '90rem', margin: 'auto', padding: '10px', borderColor: 'black', background: '#ffffff'}}>
            <br></br><br></br>
            <div className="row">
                <div className="col">
                    <img className="shadow " src={image} style={{'width':'70%'}} />
                </div>
                <div className="col" style={{'paddingLeft': '30px'}}>
                    <p style={{'fontSize':'50px'}} > <b> {title}  </b> </p>
                    <p style={{'fontSize':'40px', 'color':'#069999', 'marginTop':'-20px'}} > <b> LKR {price}.00  </b> </p>
                    <div className="row" style={{'width': '500px'}}>
                        <div className="col"  >
                            <button type="button" className="btn btn-lg shadow " style={{'backgroundColor':'#069999', 'color':'white'}} onClick={addToCartHandler} >                        
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16"
                                style={{'marginRight':'10px'}}>
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                Add to Cart
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-lg shadow " style={{'backgroundColor':'#069999', 'color':'white'}} type="button">                
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16"
                                style={{'marginRight':'10px'}}>
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                                Add to Wishlist
                            </button>
                        </div>
                    </div> 
                    <br></br>
                    <hr></hr> 
                    <h3> <u> <b> <i> More information about the book </i> </b> </u> </h3>    
                    <h5> <b> Author </b> : {author_name} </h5>
                    <h5> <b> Publisher </b> : {publisher} </h5>
                    <h5> <b> Originally Published </b> : {year} </h5> 
                    <h5> <b> ISBN </b> : {isbn} </h5>
                    <br></br>
                    <hr></hr> 
                    <h3> <u> <b> <i> Description </i> </b> </u> </h3>    
                    <h5> {description} </h5>          
                </div>
            </div>
            <br></br>
        </div>
    );

}

export default ProductPageBody;
