import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker,
  Switch,
  Select,
} from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const { Option } = Select;
const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }],
};

class ExtrashiftForm extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const manager = event.target.elements.manager.value;
    const datetime = event.target.elements.datetime.value;
    const language = event.target.elements.language.value;
    const gender = event.target.elements.gender.value;
    const quantity = event.target.elements.quantity.value;
    const Lable = event.target.elements.Lable.value;
    console.log(title, manager, datetime, language, gender, quantity, Lable);
  };

  render() {
    return (
      <Form
        {...layout}
        name="nest-messages"
        onSubmit={this.handleFormSubmit}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={"title"}
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="datetime" label="DatePicker" {...config}>
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select gender !",
              type: "array",
            },
          ]}
        >
          <Select mode="multiple" placeholder="Please select gender !">
            <Option value="Female">Female</Option>
            <Option value="Male">Male</Option>
          </Select>
        </Form.Item>

        {/* Manager DropDown Manage */}
        <Form.Item
          name="manager"
          label="Manager"
          hasFeedback
          rules={[
            { required: true, message: "Please select Shift Manager Name !" },
          ]}
        >
          <Select placeholder="Please select Shift Manager Name !">
            <Option value="Sargis">Sargis</Option>
            <Option value="Lara">Lara</Option>
          </Select>
        </Form.Item>
        {/* End Manager DropDown Manage */}

        <Form.Item
          name="language"
          label="Language"
          rules={[
            {
              required: true,
              message: "Please select Shift languages !",
              type: "array",
            },
          ]}
        >
          <Select mode="multiple" placeholder="Please select Shift languages !">
            <Option value="red">English</Option>
            <Option value="green">Russian</Option>
            <Option value="blue">Persian</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name={"quantity"}
          label="Quaintity"
          rules={[
            {
              type: "number",
              min: 1,
              max: 10,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item name="Lable" label="Urgent" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default ExtrashiftForm;
