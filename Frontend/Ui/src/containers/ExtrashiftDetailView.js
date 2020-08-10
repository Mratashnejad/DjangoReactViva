import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button, Card } from "antd";
import ExtrashiftForm from "../components/ExtrashiftForm";

class ExtrashiftDetailView extends React.Component {
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
  }

  handleDelete = (event) => {
    event.preventDefault();
    const ExtrashiftID = this.props.match.params.ExtrashiftID;
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };
    axios
      .delete(`http://127.0.0.1:8000/api/${ExtrashiftID}/delete/`)
      .then((res) => {
        if (res.status === 204) {
          this.props.history.push(`/`);
        }
      });
  };

  render() {
    return (
      <div>
        <Card title={this.state.Extrashift.title}>
          <p> {this.state.Extrashift.manager} </p>
        </Card>
        <ExtrashiftForm
          {...this.props}
          token={this.props.token}
          requestType="put"
          ExtrashiftID={this.props.match.params.ExtrashiftID}
          btnText="Update"
        />
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(ExtrashiftDetailView);
