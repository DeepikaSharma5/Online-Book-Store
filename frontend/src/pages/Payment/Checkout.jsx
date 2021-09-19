import React, {useState, useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import "./CartScreen.css";
import CartItem from "../../components/Cart/CartItem";
import CheckoutItem from '../../components/Checkout/Checkout';
import { Link } from "react-router-dom";
import { addToCart, removeFromcart } from "../../redux/actions/cartActions";
import Header from "../../components/Customer/Homepage/Header/Header";
import { APP_ROUTES } from "../../utilities/constants/routes.constants";
import { getCardDetailsById } from '../../services/getCardDetailsById'

const Checkout = () => {

    const[books,setBooks] = useState([]);
    const [quantity,setQuantity] = useState('');
    const[total,setTotal] = useState('');
    const[username,setUsername] = useState('');
    const [status,setStatus] = useState('');
    

    const userToken = localStorage.getItem("user-token");
    const decodedToken = jwt_decode(userToken, { complete: true });
    console.log(decodedToken.name);
    
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleSubmit = async () => {
    
    const newCardDetail = {
    username:decodedToken.name,
      books:cartItems.map((item) => (
          item.product
      )),
      quantity:cartItems.reduce((qty, item) => Number(item.qty) + qty, 0),
      total:cartItems.reduce(
        (price, item) => item.price * Number(item.qty) + price,
        0
      ),
      status:'success'
    };
  

    try {
        const response = await getCardDetailsById(decodedToken.name);
        console.log(response.name)
        if(response === null){
            Swal.fire({
                title: "error!",
                text: "fill ur card details",
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
        }
        else{
      const res = await axios.post("http://localhost:6060/payment/add", newCardDetail);
      Swal.fire({
        title: "Success!",
        text: "Added Successed!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"
    })
      console.log(res.data);
   } } catch (error) {
      console.log(error);
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
    }
  };

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromcart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const handleCart = (id) => {
    cartItems.map((items) => console.log(items.id));
    // window.location.href = APP_ROUTES.USER_CHECKOUT;
  };

  const viewCheckout = (product, title, quantity) => {
    reactLocalStorage.setObject("product", [product, title, quantity]);
    window.location.href = APP_ROUTES.USER_CHECKOUT;
  };

  const getCartSubTotal = () => {
    return cartItems.reduce(
      (price, item) => item.price * Number(item.qty) + price,
      0
    );
  };

  const navigateToHome = (event) =>
    (window.location.href = APP_ROUTES.USER_HOMEPAGE);

  return (
    <>
      <Header />
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your cart is empty{" "}
              <button style={{ color: "teal" }} onClick={navigateToHome}>
                {" "}
                Go back
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <CheckoutItem
                key={item.product}
                item={item}
                
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>Rs.{getCartSubTotal().toFixed(2)}</p>
          </div>
          <div>
            <button onClick={() => handleSubmit()}>Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
