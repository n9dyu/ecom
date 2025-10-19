import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

const ProfileModal = ({ isOpen, onClose }) => {
  // State for form
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "",
    paymentDetails: "",
  });

  // Load user data from localStorage on mount
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

  // Update input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    onClose();
  };

  if (!isOpen) return null;

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
                        <input
                        type="text"
                        name="paymentMethod"
                        value={userData.paymentMethod}
                        onChange={handleChange}
                        placeholder="e.g., GCash, Credit Card"
                        />
                    </div>

                    <div>
                        <label>Payment Details:</label>
                        <input
                        type="text"
                        name="paymentDetails"
                        value={userData.paymentDetails}
                        onChange={handleChange}
                        placeholder="Enter payment details"
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
