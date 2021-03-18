import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    //set state after order placed.
    const [orderPlaced, setOrderPlaed] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);//কার্ট কে খালি করে দিবে।
        setOrderPlaed(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        console.log("clicked");
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        // fake data তে পূর্বে সেটিং করা আছে।
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);

    let thankyou; 
    if(orderPlaced){
        thankyou = <img src={happyImage} alt=""/>
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {/* <h1>Cart Items: {cart.length}</h1> */}
                {
                    cart.map(pd => <ReviewItem 
                        product={pd}
                        removeProduct = {removeProduct}
                        ></ReviewItem>)
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="cart-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;