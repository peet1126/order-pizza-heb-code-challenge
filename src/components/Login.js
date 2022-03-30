import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessTokenAsync } from "../store/slices/user";
import { setToken } from "../store/slices/user";

// user login status and access token are stored in Redux state
export default function Login() {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // dispatches an action to get and set the access token
  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = { password, username };

    dispatch(getAccessTokenAsync(setToken(userInfo)));
  };

  const user = useSelector((state) => state.user);

  return (
    <div className="create">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="order-card">
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      {user.error && <p style={{ color: "red" }}>{user.error}</p>}
    </div>
  );
}
