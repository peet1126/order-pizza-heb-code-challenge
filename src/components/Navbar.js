import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logOut } from "../store/slices/user";

export default function Navbar() {
  const location = useLocation();
  // the logout button dispatches an action that removes the access token from the user
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <h1>Order Up</h1>
      {!(location.pathname === "/login") && (
        <nav>
          <Link to="/login">
            <button onClick={() => dispatch(logOut())}>Logout</button>
          </Link>
        </nav>
      )}
    </div>
  );
}
