import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { removeFromcart } from "../../redux/actions/cartActions";

const CheckoutItem = ({ item }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          style={{ height: "120px", borderRadius: "4px" }}
          src={item.image}
          alt={item.title}
        />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.title}</p>
      </Link>
      <p className="cartitem__price">{item.price}</p>

      <p className="cartitem__select">{item.qty}</p>
    </div>
  );
};

export default CheckoutItem;
