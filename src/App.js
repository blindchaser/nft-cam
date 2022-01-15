import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./Home";
import NFTList from "./NFTList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/nftlist" component={NFTList} />
      </Switch>
    </div>
  );
}

export default App;
