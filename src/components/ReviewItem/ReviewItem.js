import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const { name, quantity, key, price } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid gray',
        paddingBottom: '15px',
        marginLeft: '200px'
    }
    return (
        <div className="review-item" style={reviewItemStyle}>
            <h2 className="product-heading">{name}</h2>
            <p><small>$ {price}</small></p>
            <h3>Quantity: {quantity}</h3>
            <br />
            <button
                className="cart-btn"
                onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;