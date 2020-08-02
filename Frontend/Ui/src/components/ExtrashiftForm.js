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
          <FormItem name="gender" label="Gender">
            <Input placeholder="select Gender Type .. " />
          </FormItem>
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
