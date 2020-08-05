import React from "react";
import { Route } from "react-router-dom";
import ExtrashiftList from "./containers/ExtrashiftListView";
import ExtrashiftDetail from "./containers/ExtrashiftDetailView";
import HomePage from "./containers/HomePage.js";
import Courses from "./containers/Courses.js";
import About from "./containers/About.js";
import index from "./Home/index.jsx";
const BaseRouter = () => (
  <div>
    <Route exact path="/" component={index} />
    <Route exact path="/HomePage" component={HomePage} />
    <Route exact path="/extrashift" component={ExtrashiftList} />
    <Route exact path="/:extrashiftID" component={ExtrashiftDetail} />
    <Route exact path="/courses" component={Courses} />
    <Route exact path="/about" component={About} />
  </div>
);
export default BaseRouter;
