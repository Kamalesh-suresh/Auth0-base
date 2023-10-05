import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

function LoginButton({ user }) {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <Button
      variant="contained"
      onClick={() =>
        user
          ? logout({ logoutParams: { returnTo: window.location.origin } })
          : loginWithRedirect()
      }
    >
      {user ? "Log out" : "Login"}
    </Button>
  );
}

export default LoginButton;
