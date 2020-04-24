import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Router from "./Router";

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route component={Router} />
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
