import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./css/Signup.css"; // Import your CSS file for styling
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/signup", {
                email,
                password,
            });

            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                navigate("/home", { state: { id: email } });
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
            console.error(error);
        }
    }

    return (
      <div>
        <Navbar/>
        <div className="signup-container">
            <div className="signup-image">
                {/* Replace with your image */}
                <img src="/123.png" alt="Login Illustration" style={{ width: "750px", height: "500px" }}className="image"/>
            </div>
            <div className="signup-form">
                <h1>Signup</h1>
                <form onSubmit={submit}>
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
                    <button type="submit">Submit</button>
                </form>
                <p>already have an account?</p>
                <Link to="/">Login Page</Link>
            </div>
        </div>
        </div>
    );
}

export default Signup;
