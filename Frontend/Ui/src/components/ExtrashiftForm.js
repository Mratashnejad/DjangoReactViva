import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class ExtrashiftForm extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    console.log(title);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <FormItem name="title" label="Title">
            <Input placeholder="title here" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default ExtrashiftForm;
