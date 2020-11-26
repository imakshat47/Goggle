import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">{/* Serach results  */}
          <SearchPage />
          </Route>
          <Route path="/">
            {/* Home page with search Bar  */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
