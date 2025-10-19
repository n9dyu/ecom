import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    let storedUser;
    try {
      storedUser = JSON.parse(localStorage.getItem("userData"));
    } catch {
      storedUser = null;
    }

    if (!storedUser) {
      setErrorMessage("No account found. Please register first.");
      return;
    }

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (
      storedUser.email === trimmedEmail &&
      storedUser.password === trimmedPassword
    ) {
      navigate("/home");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-card">
      <form onSubmit = {handleLogin}>
        <h1>Login</h1>
        
        <label>Email</label>
        <input
          type="email"
          autoComplete='email'
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            autoComplete='current-password'
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" className="reg-password" onClick={() => setShowPassword(!showPassword)} >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {errorMessage && (
          <p className="error-text" style={{ color: "red", fontSize: "0.85rem" }}>
            {errorMessage}
          </p>
        )}

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="create-acc">
          New here?{" "}
          <span onClick={() => navigate("/register")}>Create an account</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
