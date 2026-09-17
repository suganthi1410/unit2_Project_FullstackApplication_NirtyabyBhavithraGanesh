import { useState } from "react";
import axios from "axios";
import "./LoginPage.css";

function LoginPage({ loggedInUser , onLogin }){
  if (loggedInUser) {
    return (
      <div className = "login-form">
        <div className = "login-card">
        <h2>You are already logged in</h2>
      </div>
      </div>
    );
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    //error handling for empty username password
    async function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      setError("Username and password are required")
      return;    
    }
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password
      });
      console.log("Axios response:", response);

      if (response.status === 200) {
        onLogin(username);   
        window.location.href = "/"; //renders to home page after login
      }
    } catch (err) {
        console.log("Axios error:", err);
      setError("Invalid username or password");
    }
  }
   
    return(
    <div className = "login-page">
      <div className = "login-card">
        <h2 className = "login-title">Login</h2>
        {error && <p className = "login-error" style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
        <label>Username</label>
        <input 
        type="text" 
        value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input 
        type="password" 
        value={password}
         onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
    </div>
    );
}
export default LoginPage;