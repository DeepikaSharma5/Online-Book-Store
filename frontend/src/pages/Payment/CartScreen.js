import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartScreen.css";
import CartItem from "../../components/Cart/CartItem";
import { Link } from "react-router-dom";
import { addToCart, removeFromcart } from "../../redux/actions/cartActions";
import Header from "../../components/Customer/Homepage/Header/Header";
import { APP_ROUTES } from "../../utilities/constants/routes.constants";
const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromcart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
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
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
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
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
