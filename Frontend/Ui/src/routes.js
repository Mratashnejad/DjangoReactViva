import React from "react";
import { Route } from "react-router-dom";
import ExtrashiftList from "./containers/ExtrashiftListView";
import ExtrashiftDetail from "./containers/ExtrashiftDetailView";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ExtrashiftList} />
    <Route exact path="/:ExtrashiftID" component={ExtrashiftDetail} />
  </div>
);
export default BaseRouter;
