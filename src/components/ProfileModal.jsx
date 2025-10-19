import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

const ProfileModal = ({ isOpen, onClose }) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "+63",
        paymentMethod: "Cash on Delivery",
        paymentDetails: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const stored = localStorage.getItem("userData");
        if (stored) {
        try {
            setUserData(JSON.parse(stored));
        } catch (err) {
            console.error("Invalid userData in localStorage", err);
        }
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
        const validName = value.replace(/[^a-zA-Z\s\-.]/g, "");
        setUserData((prev) => ({ ...prev, [name]: value }));
        return;
    };

    if (name === "phone") {
      const numbersOnly = value.replace(/[^0-9+]/g, "");
      if (!numbersOnly.startsWith("+63")) return;
      if (numbersOnly.length <= 13) {
        setUserData((prev) => ({ ...prev, phone: numbersOnly }));
      }
      return;
    }

    if (name === "paymentDetails") {
      const numericValue = value.replace(/[^\d\s-]/g, "");
      setUserData((prev) => ({ ...prev, paymentDetails: numericValue }));
      return;
    }

    if (name === "paymentDetails" && userData.paymentMethod !== "Cash on Delivery") {
      const numericValue = value.replace(/[^\d\s-]/g, "");
      setUserData((prev) => ({ ...prev, paymentDetails: numericValue }));
      return;
    }

        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!userData.name || !userData.email || !userData.address) {
            setErrorMessage("Name, Email, and Address are required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userData.email)) {
            setErrorMessage("Invalid email format.");
            return;
        }

        const phoneRegex = /^\+63\d{10}$/;
        if (!phoneRegex.test(userData.phone)) {
            setErrorMessage("Phone number must be in the format +63XXXXXXXXXX.");
            return;
        }

        if (!userData.paymentDetails) {
            setErrorMessage("Payment details are required.");
            return;
        }

        if (userData.paymentMethod !== "Cash on Delivery" && !userData.paymentDetails) {
            setErrorMessage("Payment details are required for this payment method.");
            return;
        }

        setErrorMessage("");
        localStorage.setItem("userData", JSON.stringify(userData));
        onClose();
    };

    if (!isOpen) return null;

    const getPaymentPlaceholder = () => {
        if (userData.paymentMethod === "Cash on Delivery") return "Not required";
        switch (userData.paymentMethod) {
            case "GCash":
                return "Enter your GCash number (e.g. 09XXXXXXXXX)";
            case "Credit/Debit Card":
                return "Enter your card number";
            case "Bank Transfer":
                return "Enter your bank account number";
            default:
                return "Enter payment details";
            }
    };

    return (
        <div className="profile-screen" onClick={onClose} >
            <div className="profile-card" onClick={(e) => e.stopPropagation()} >

                <button className="close-btn" onClick={onClose}>
                    <X size={24} />
                </button>

                <h2>Profile</h2>

                <div className="profile-input">
                    <div>
                        <label>Name:</label>
                        <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label>Address:</label>
                        <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        />
                    </div>

                    <div>
                        <label>Phone:</label>
                        <input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        />
                    </div>

                    <div>
                        <label>Payment Method:</label>
                        <select name="paymentMethod" value={userData.paymentMethod} onChange={handleChange}>
                            <option value="Cash on Delivery">Cash on Delivery</option>
                            <option value="GCash">GCash</option>
                            <option value="Credit/Debit Card">Credit/Debit Card</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                    </div>

                    <div>
                        <label>Payment Details:</label>
                        <input
                        type="text"
                        name="paymentDetails"
                        value={userData.paymentDetails}
                        onChange={handleChange}
                        placeholder={getPaymentPlaceholder()}
                        disabled={userData.paymentMethod === "Cash on Delivery"}
                        className={userData.paymentMethod === "Cash on Delivery" ? "bg-gray-200 cursor-not-allowed" : ""}
                        />
                    </div>
                </div>

                <div className="profile-btn">
                    <button onClick={onClose} className="cancel"> Cancel </button>
                    <button onClick={handleSave} className="save"> Save </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
