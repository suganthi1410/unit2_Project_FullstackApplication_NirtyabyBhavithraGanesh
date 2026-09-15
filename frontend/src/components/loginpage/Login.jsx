import { useState } from "react";
function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
    <div>
        <h2>Login</h2>
        <form>
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