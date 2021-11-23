import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/a-propos" exact component={About} />
          <Route
            path="/logement/:id"
            render={(props) => <Logement {...props} />}
          />
          <Route path="/*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
