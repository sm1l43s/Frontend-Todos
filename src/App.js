import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { BrowserRouter, Route } from "react-router-dom";
import SignInContainer from "./components/signin/SignInContainer";
import SignUpContainer from "./components/signup/SignUpContaiener";

function App() {
  return (
    <BrowserRouter>
      <Route path="/signin" render={() => <SignInContainer />} />
      <Route path="/signup" render={() => <SignUpContainer />} />
      <MainContainer />
    </BrowserRouter>
  );
}

export default App;
