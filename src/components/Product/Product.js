import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // const { img, name } = props.product; *
    // console.log(props.product && props.product.name); or below
    // console.log(props.product?.name);
    // console.log(props);
    return (
        <div className="product">
            <div>
                <img src={props.product?.img} alt="" />
                {/* <img src={img} alt="" /> */}
            </div>
            <div>
                <h3 className="product-heading">{props.product?.name}</h3>
                {/* <h3>{name}</h3> */}
                <p><small>by: {props.product?.seller}</small></p>
                <p>$ {props.product?.price}</p>
                <p>only {props.product?.stock} left in stock - order soon</p>
                <button
                    className="cart-btn"
                    onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;