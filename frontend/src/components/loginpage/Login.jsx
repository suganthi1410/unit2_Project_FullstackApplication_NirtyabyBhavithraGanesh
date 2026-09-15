import { useState } from "react";
function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    //error handling for empty username password
    function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      setError("Username and password are required")
      return;    }

    console.log("Login clicked:", username, password);
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