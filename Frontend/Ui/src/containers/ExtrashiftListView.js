import React from "react";
import axios from "axios";
import Extrashifts from "../components/Extrashift.js";
import ExtrashiftForm from "../components/ExtrashiftForm.js";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

class ExtrashiftList extends React.Component {
  state = {
    Extrashifts: [], //store data from the api
  };
  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/") //get list of Extrashifts from APi
      .then((res) => {
        this.setState({
          Extrashifts: res.data,
        });
        console.log(res.data);
      });
  } // that means after data come from api , its Update them

  render() {
    return (
      <div>
        <Extrashifts data={this.state.Extrashifts} />
        <br />
        <h2>Extrashift From</h2>
        <br />
        <ExtrashiftForm />
      </div>
    );
  }
}
export default ExtrashiftList;
