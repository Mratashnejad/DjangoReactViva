import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  PageHeader,
  Select,
  DatePicker,
  message,
} from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import axios from "axios";

// defualt setting for django

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

// from layout setting
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

// end fform layout setting

// const onFinish = (values) => {
//   console.log(values);
//   axios.post("http://127.0.0.1:8000/api/create/", {
//     title: values.title,
//     manager: values.manager,
//   });
// };

class ExtrashiftForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Extrashifts: [],
    };
  }

  // componentDidMount() {
  //   this.fetchExtrashift();
  // }

  handleSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/api/create", {
        data: {
          title: this.props.Extrashifts.title,
          manager: this.props.Extrashifts.manager
        },
      })
      .then((res) => {
        if (res.status == 200) message.success("data successfully updated!");
        this.fetchExtrashift();
      })
      .catch((err) => {
        message.error("data profile failed to update ...");
      });
  };

  render() {
    return (
      <div>
        <Form
          {...formItemLayout}
          name="update"
          onFinish={this.handleSubmit}
          ref={this.formRef}
        >
          <Form.Item label="Title :">
            <Input name="title" placeholder="Put a title here" />
          </Form.Item>
          <Form.Item label="Manager :">
            <Input name="manager" placeholder="Enter manager name" />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ExtrashiftForm;
