import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { BrowserRouter as Router } from "react-router-dom";
import Customlayout from "./containers/Layout";
import BaseRouter from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Customlayout> */}
          <BaseRouter />
        {/* </Customlayout> */}
      </Router>
    </div>
  );
}

export default App;
