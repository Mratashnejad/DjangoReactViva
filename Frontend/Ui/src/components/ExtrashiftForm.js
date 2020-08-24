import React from "react";
import { Form, Input, Button, message } from "antd";
import "antd/dist/antd.css";
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

class ExtrashiftForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Extrashifts: [],
    };
  }

  handleSubmit = (values) => {
    axios
      .post("http://127.0.0.1:8000/api/", {
        values,
      })
      .then((res) => {
        if (res.status == 200) message.success("data successfully updated!");
        this.fetchExtrashift();
      })
      .catch((err) => {
        message.error("data profile failed to update ...");
      });
    console.log(values);
  };

  render() {
    return (
      <div>
        <Form {...formItemLayout} name="update" onFinish={this.handleSubmit}>
          <Form.Item label="Title :" name="title">
            <Input placeholder="Put a title here" />
          </Form.Item>
          <Form.Item label="Manager :" name="manager">
            <Input placeholder="Enter manager name" />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              create
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ExtrashiftForm;
