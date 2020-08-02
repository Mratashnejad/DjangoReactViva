import React from "react";
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

class ExtrashiftForm extends React.Component {
  render() {
    return (
      <div>
        <Form onFinish={(values) => console.log(values)}>
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
