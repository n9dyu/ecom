import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

const CartModal = ({ isOpen, onClose, cartItems = [], onQuantityChange, onRemoveItem, onClearCart }) => {
    const [userData, setUserData] = useState(null);
    const [orderSuccess, setOrderSuccess] = useState(false);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + Number(item.price || 0) * item.quantity, 0
    );
    const shippingFee = 40;
    const total = subtotal + shippingFee;

    useEffect(() => {
        const stored = localStorage.getItem("userData");
        if (stored) {
            setUserData(JSON.parse(stored));
        }
    }, []);

    if (!isOpen) return null;

    const handleCheckout = () => {
        setOrderSuccess(true);

        if (onClearCart) {
            onClearCart();
        }

        setTimeout(() => {
            setOrderSuccess(false);
            onClose();
        }, 3000);
    };

    return (
        <div className="cart-screen" onClick={onClose}>
            <div className="cart-container" onClick={(e) => e.stopPropagation()}>     

                <button className="close-btn" onClick={onClose}>
                    <X size={24} />
                </button>

                {orderSuccess && (
                    <p className="success">
                        ✅ Order placed successfully! Thank you for your purchase.
                    </p>
                )}

                <h1 className="checkout-title">Checkout</h1>

                <div className="checkout-content">

                    <div>
                        <h2>SHIPPING DETAILS</h2>
                        {userData ? (
                        <p className="shipping-details">
                            {userData.name} <br />
                            {userData.address} <br />
                            {userData.phone}
                        </p>
                        ) : (
                        <p className="default">No user data found.</p>
                        )}

                        <h2>PAYMENT METHOD</h2>
                        {userData ? (
                        <ul className="space-y-2 text-sm">
                            <li className="payment-list">
                                {userData.paymentMethod} — {userData.paymentDetails}
                            </li>
                        </ul>
                        ) : (
                        <p className="default">No payment info available.</p>
                        )}
                    </div>

                    <div className="cart-order">
                        {cartItems.map((item, index) => (
                            <div key={index} className="order-card">
                                <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 rounded-full object-cover mr-6"
                                />
                                <div>
                                    <h3>{item.name}</h3>

                                    <div className="quantity">
                                        <button onClick={() => onQuantityChange(item.name, "decrease")}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => onQuantityChange(item.name, "increase")}>+</button>
                                    </div>

                                    <p className="price">₱{Number(item.price || 0) * item.quantity}</p>

                                    <button
                                    className="delete-btn text-red-500 font-bold"
                                    onClick={() => onRemoveItem(item.name)}
                                >
                                    Delete
                                </button>
                                </div>
                            </div>
                        ))}

                        <div className="border-t border-gray-300 my-4"></div>

                        <div className="flex justify-between text-xs mb-2">
                            <span className="uppercase">Shipping Fee</span>
                            <span>₱{shippingFee}</span>
                        </div>

                        <div className="flex justify-between font-bold text-lg mb-6">
                            <span>Total</span>
                            <span>₱{total}</span>
                        </div>

                        <button className="checkout-btn" onClick={handleCheckout}>
                            CHECK OUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
