import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";
import { removeFromcart } from "../../redux/actions/cartActions";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
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
      <select
        className="cartItem__select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
