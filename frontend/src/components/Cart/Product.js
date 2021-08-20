import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ image, title, price, description, productId }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />

      <div className="product_info">
        <p className="info_name">{title}</p>
        <p className="info_description">{description.substring(0, 100)}...</p>

        <p className="info_price">{price}</p>

        <Link to={`/product/${productId}`} className="info_button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
