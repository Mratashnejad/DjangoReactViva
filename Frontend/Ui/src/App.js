import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import Customlayout from "./containers/Layout";
import BaseRouter from "./routes";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'


function App() {
  return (
    <div className="App">
      <Router>
        <Customlayout>
          <BaseRouter />
        </Customlayout>
      </Router>
    </div>
  );
}

export default App;
