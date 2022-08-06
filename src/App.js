import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Container>
  );
};
export default App;
