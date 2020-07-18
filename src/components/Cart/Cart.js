import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = product.price + total*product.quantity ;
    }

    let shipping = 0;
    if (total > 200) {
        shipping = 0;
    }
    else if (total > 100) {
        shipping = 10.22;
    }
    else if (total > 0) {
        shipping = 22.08;
    }
   

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h4>Order Summary</h4>
            <div className="discount">
                <p className="caution bold">Discount:</p>
                <p className="caution size"><small><i> Buy minimum $200 for <span className="bold">free</span> shipping cost</i></small></p>
                <p className="caution size"><small><i> Buy minimum $100 for <span className="bold">$10.22</span> shipping cost</i></small></p>
            </div>
            <p><span className="bold">Items Ordered:</span> {cart.length}</p>
            <p><span className="bold">Product Price:</span> ${Math.round(total)}</p>
            <p><small><span className="bold">Shipping Cost:</span> ${shipping}</small></p>
            <p><span className="bold">Tax + VAT:</span> ${tax}</p>
            <p><span className="bold">Total Price:</span> ${grandTotal}</p>
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;