import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";

const FormItem = Form.Item;

class ExtrashiftForm extends React.Component {
  
  handleFormSubmit = async (event, requestType, ExtrashiftID) => {
    // event.preventDefault();
    
    const onFinish = values => { console.log('Success:', values) };
  
    // const postObj = {
    //   title: event.target.elements.title.value,
    //   manager: event.target.elements.manager.value,
    // };

  
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };

    if (requestType === "post") {
      await axios
        .post("http://127.0.0.1:8000/api/create/", onFinish)
        .then((res) => {
          if (res.status === 201) {
            this.props.history.push(`/`);
          }
        });
    } else if (requestType === "put") {
      await axios
        .put(`http://127.0.0.1:8000/api/${ExtrashiftID}/update/`, onFinish)
        .then((res) => {
          if (res.status === 200) {
            this.props.history.push(`/`);
          }
        });
    }
  };

  render() {
    return (
      <div>
        <Form
          onFinish={(event) =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.ExtrashiftID
            )
          }
        >
          <FormItem label="Title :">
            <Input name="title" placeholder="Put a title here" />
          </FormItem>
          <FormItem label="Manager :">
            <Input name="manager" placeholder="Enter manager name" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(ExtrashiftForm);
