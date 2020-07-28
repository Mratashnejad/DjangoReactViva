import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Customlayout from "./containers/Layout";
import Extrashiftlist from "./containers/ExtrashiftListView.js";

function App() {
  return (
    <div className="App">
      <Customlayout>
        <Extrashiftlist />
      </Customlayout>
    </div>
  );
}

export default App;
