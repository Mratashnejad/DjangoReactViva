import React from "react";
import { Form, Input, Button, Select, Switch, DatePicker } from "antd";

const FormItem = Form.Item;

class ExtrashiftForm extends React.Component {
  render() {
    return (
      <div>
        <Form onFinish={(values) => console.log(values)}>
          <FormItem name="title" label="Title">
            <Input placeholder="title here" />
          </FormItem>
          <FormItem name="manager" label="Manager">
            <Input placeholder="select Manager Name .. " />
          </FormItem>
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

          <FormItem name="Lable" label="Lable">
            <Input />
          </FormItem>

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
