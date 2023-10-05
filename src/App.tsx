import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/loginButton";
import { Grid } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/navbar";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user);

  return (
    <div className="App">
      <Navbar user={user} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
