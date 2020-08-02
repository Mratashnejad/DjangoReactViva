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

const onFinish = (values) => {
  console.log(values);
};

class ExtrashiftForm extends React.Component {
  render() {
    return (
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="date-picker" label="DatePicker" {...config}>
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="select-multiple-Gender"
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
          name="select-Manager"
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
          name="select-multiple-Language"
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
          name={["user", "age"]}
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

        <Form.Item name="switch" label="Urgent" valuePropName="checked">
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
