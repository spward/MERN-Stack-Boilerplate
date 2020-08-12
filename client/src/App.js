import React from "react";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <fragment>
          <section className="container">
            <Switch>
              <Route exact path="/" component={} />
            </Switch>
          </section>
        </fragment>
      </Router>
    </Provider>
  );
}

export default App;
