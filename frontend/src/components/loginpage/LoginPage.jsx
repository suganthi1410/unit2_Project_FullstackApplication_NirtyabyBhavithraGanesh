import { useState } from "react";
import axios from "axios";

function LoginPage({ loggedInUser , onLogin }){
  if (loggedInUser) {
    return (
      <div>
        <h2>You are already logged in</h2>
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
    <div>
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
    );
}
export default LoginPage;