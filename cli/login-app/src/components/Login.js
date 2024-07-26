import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './css/Login.css';
import Navbar from "./navbar";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function submitForm(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/", {
                email,
                password,
            });

            if (response.data === "exist") {
                history("/home", { state: { id: email } });
            } else if (response.data === "notexist") {
                setError("User has not signed up");
            }
        } catch (error) {
            setError("Wrong details or server error. Please try again.");
            console.error("Login error:", error);
        }
    }

    return (
        <>
        <Navbar/>
        <div className="login-container">
            <div className="login-image">
                <img src="/image.png" alt="Login Illustration" style={{ width: "750px", height: "500px" }}className="image"/>
            </div>
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={submitForm}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                <br />
                <p>haven't signed up?</p>
                <br />
                <Link to="/signup">Signup</Link>
            </div>
        </div>
        </>
    );
}

export default Login;
