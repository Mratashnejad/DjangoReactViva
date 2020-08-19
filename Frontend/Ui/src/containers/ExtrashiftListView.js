import React from "react";
import axios from "axios";
import Extrashifts from "../components/Extrashift";
import ExtrashiftForm from "../components/ExtrashiftForm";

class ExtrashiftlistView extends React.Component {
  state = {
    Extrashifts: []
  };

  fetchExtrashifts = () => {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      this.setState({
        Extrashifts: res.data,
      });
    });
  };

  componentDidMount() {
    this.fetchExtrashifts();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchExtrashifts();
    }
  }

  render() {
    return (
      <div>
        <Extrashifts data={this.state.Extrashifts} /> <br />
        <h2> Create an Extrashift </h2>
        <ExtrashiftForm
          requestType="post"
          ExtrashiftID={null}
          btnText="Create"
        />
      </div>
    );
  }
}

export default ExtrashiftlistView;
