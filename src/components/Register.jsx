import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "+63",
        paymentMethod: "GCash",
        paymentDetails: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("userData", JSON.stringify(formData));

        alert("Account registered successfully!");
        navigate("/"); 
    };

    const getPaymentPlaceholder = () => {
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
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                />

                <label>Payment Method</label>
                <select name="paymentMethod" value = {formData.paymentMethod} onChange = { handleChange }>
                    <option value="GCash">GCash</option>
                    <option value="Credit/Debit Card">Credit/Debit Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </select>

                <label>Payment Details (e.g., GCash number)</label>
                <input
                    type="text"
                    name="paymentDetails"
                    value={formData.paymentDetails}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="register-btn">Register</button>
            </form>
        </div>
  );
}

export default Register;
