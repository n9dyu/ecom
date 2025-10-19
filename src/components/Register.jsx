import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "+63",
        paymentMethod: "Cash on Delivery",
        paymentDetails: "",
    });

    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            const validName = value.replace(/[^a-zA-Z\s\-.]/g, "");
            setFormData((prev) => ({ ...prev, name: validName }));
            return;
        }

        if (name === "phone") {
            const numbersOnly = value.replace(/[^0-9+]/g, "");
            if (!numbersOnly.startsWith("+63")) return; 
            if (numbersOnly.length <= 13) {
                setFormData((prev) => ({ ...prev, phone: numbersOnly }));
            }
            return;
        }

        if (name === "paymentDetails" && formData.paymentMethod !== "Cash on Delivery") {
            const numericValue = value.replace(/[^\d\s-]/g, "");
            setFormData((prev) => ({ ...prev, paymentDetails: numericValue }));
            return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        if (formData.paymentMethod !== "Cash on Delivery" && !formData.paymentDetails) {
            setErrorMessage("Payment details are required for this payment method.");
            return;
        }
        
        setErrorMessage("");

        localStorage.setItem("userData", JSON.stringify({
            ...formData,
            name: formData.name.trim(),
            email: formData.email.trim(),
            address: formData.address.trim(),
        }));

        alert("Account registered successfully!");
        navigate("/login"); 
    };

    const getPaymentPlaceholder = () => {
        if (formData.paymentMethod === "Cash on Delivery") return "Not required";
        switch (formData.paymentMethod) {
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
        <div className="register-card">
            <form onSubmit = { handleSubmit }>
                <h1>Register Account</h1>

                <label>Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={4}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    minLength={8}
                />

                <label>Password</label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength={8} 
                    />
                    <button type="button" className="reg-password" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                <label>Confirm Password</label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        minLength={8}
                    />
                    <button type="button" className="reg-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? (<EyeOff size={18} />) : (<Eye size={18} />)}
                    </button>
                </div>

                <label>Address</label>
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />

                <label>Phone Number</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="\+63[0-9]{10,}$"
                />

                <label>Payment Method</label>
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} >
                    <option value="Cash on Delivery">Cash on Delivery</option>
                    <option value="GCash">GCash</option>
                    <option value="Credit/Debit Card">Credit/Debit Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>

                <label>Payment Details</label>
                <input
                    type="text"
                    name="paymentDetails"
                    value={formData.paymentDetails}
                    onChange={handleChange}
                    disabled={formData.paymentMethod === "Cash on Delivery"}
                    className={formData.paymentMethod === "Cash on Delivery" ? "bg-gray-200 cursor-not-allowed" : ""}
                />

                {errorMessage && (
                    <p className="error-text">
                        {errorMessage}
                    </p>
                )}

                <button type="submit" className="register-btn">Register</button>

                <p className="create-acc">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>Log in</span>
                </p>
            </form>
        </div>
  );
}

export default Register;
