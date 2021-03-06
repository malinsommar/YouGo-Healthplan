import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./pages/home.js";
import Service from "./pages/theService.js";
import Pricing from "./pages/pricing.js";
import Blogg from "./pages/blogg.js";
import Contact from "./pages/contact.js";
import NoPageFound from "./pages/default.js";
import About from "./pages/about.js";
import ScrollToTop from "./components/ScrollToTopComp";
import "./index.css";

const routes = (
  <BrowserRouter>
    <Fragment>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/blogg" component={Blogg} />
        <Route path="/contact" component={Contact} />
        <Route component={NoPageFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

serviceWorker.unregister();
