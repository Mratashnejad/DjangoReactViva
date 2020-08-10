import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  Form,
  Input,
  Button,
  Select,
  Switch,
  DatePicker,
  InputNumber,
} from "antd";

const FormItem = Form.Item;
const { Option } = Select;
// const onFinish = values => {

//   console.log(values);
// };

class ExtrashiftForm extends React.Component {
  handleFormSubmit = async (event, requestType, ExtrashiftID) => {
    event.preventDefault();
    const postObj = {
      title: event.target.elements.title.value,
      manager: event.target.elements.manager.value
    }
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };
    if (requestType === "post") {
      await axios.post("http://127.0.0.1:8000/api/create/", postObj)
        .then(res => {
          if (res.status === 201) {
            this.props.history.push(`/`);
          }
        })
    } else if (requestType === "put") {
      await axios.put(`http://127.0.0.1:8000/api/${articleID}/update/`, postObj)
        .then(res => {
          if (res.status === 200) {
            this.props.history.push(`/`);
          }
        })

    // switch (requestType) {
    //   case "post":
    //     return axios
    //       .post("url://127.0.0.1:8000/api/", {
    //         title: title,
    //         manager: manager,
    //         datetime: datetime,
    //         gender: gender,
    //         Lable: Lable,
    //         quantity: quantity,
    //       })
    //       .then((res) => console.log(res))
    //       .catch((err) => console.err(err));
    //   case "put":
    //     return axios
    //       .put(`http://127.0.0.1:8000/api/${ExtrashiftID}/`, {
    //         title: title,
    //         manager: manager,
    //         datetime: datetime,
    //         gender: gender,
    //         Lable: Lable,
    //         quantity: quantity,
    //       })
    //       .then((res) => console.log(res))
    //       .catch((err) => console.err(err));
    // }

    return axios
      .post("url://127.0.0.1:8000/api/", {
        title: title,
        manager: manager,
        datetime: datetime,
        gender: gender,
        Lable: Lable,
        quantity: quantity,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  render() {
    return (
      <div>
        <Form
          onFinish={(values) =>
            this.handleFormSubmit(values, this.props.values)
          }
        >
          <FormItem name="title" label="Title">
            <Input placeholder="title here" />
          </FormItem>
          <Form.Item
            name="manager"
            label="Manager"
            hasFeedback
            rules={[{ required: true, message: "Please select manager!" }]}
          >
            <Select placeholder="Please select a manager">
              <Option value="Sa">Sargis</Option>
              <Option value="La">Lara</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select Gender !",
                type: "array",
              },
            ]}
          >
            <Select mode="multiple" placeholder="Please select Gender !">
              <Option value="red">Female</Option>
              <Option value="green">Male</Option>
            </Select>
          </Form.Item>

          <Form.Item name="Lable" label="Lable" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="quantity">
            <Form.Item name="quantity" noStyle>
              <InputNumber min={1} max={10} />
            </Form.Item>
            <span className="ant-form-text">needs</span>
          </Form.Item>
          <Form.Item name="date-picker" label="DatePicker">
            <DatePicker />
          </Form.Item>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Ok
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default ExtrashiftForm;
