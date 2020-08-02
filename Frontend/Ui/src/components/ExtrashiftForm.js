import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class ExtrashiftForm extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const manager = event.target.elements.manager.value;
    const gender = event.target.elements.gender.value;
    const Lable = event.target.elements.Lable.value;
    const datetime = event.target.elements.datetime.value;
    console.log(title, manager, gender, Lable, datetime);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
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
          <FormItem name="datetime" label="DateTime">
            <Input />
          </FormItem>
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
