import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();

  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>
          {isAuthenticated && <p>{user.name}</p>}
        </li>
        {isAuthenticated ? (
          <li
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log out
          </li>
        ) : (
          <li onClick={() => loginWithRedirect()}>Login</li>
        )}
      </ul>
    </div>
  );
};
