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
/*const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];*/
ReactDOM.render(routes, document.getElementById("root"));

serviceWorker.unregister();
