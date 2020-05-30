import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = product.price + total;

    }

    let shipping = 0;
    if(total>200){
        shipping = 0;
    }
    else if (total > 0) {
        shipping = 22.08;
    }
    else if (total > 100) {
        shipping = 10.22;
    }

    const tax = (total/10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>Product Price: {Math.round(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Tax + VAT: {tax}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;