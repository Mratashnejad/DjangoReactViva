import React from "react";
import { Route } from "react-router-dom";
import ExtrashiftlistView from "./containers/ExtrashiftListView"; 
import ExtrashiftDetail from "./containers/ExtrashiftDetailView";

import Courses from "./containers/Courses";
import About from "./containers/About";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ExtrashiftlistView} />{" "}
    <Route exact path="/extrashift/:extrashiftID" component={ExtrashiftDetail} />{" "}
    <Route exact path="/courses" component={Courses} />{" "}
    <Route exact path="/about" component={About} />{" "}
    </div>
);
export default BaseRouter;
