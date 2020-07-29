import React from "react";
import axios from "axios";
import { Card } from "antd";

class ExtrashiftDetail extends React.Component {
  state = {
    Extrashift: {},
  };
  componentDidMount() {
    const ExtrashiftID = this.props.match.params.ExtrashiftID;
    axios.get(`http://127.0.0.1:8000/api/${ExtrashiftID}`).then((res) => {
      this.setState({
        Extrashift: res.data,
      });
    });
  } // that means after data come from api , its Update them

  render() {
    return (
      <Card title={this.state.Extrashift.title}>
        <p> {this.state.Extrashift.datetime} </p>
        <p> {this.state.Extrashift.manager} </p>
        <p> {this.state.Extrashift.quantity} </p>
        <p> {this.state.Extrashift.gender} </p>
        <p> {this.state.Extrashift.Lable} </p>
        <p> {this.state.Extrashift.language} </p>
      </Card>
    );
  }
}
export default ExtrashiftDetail;
